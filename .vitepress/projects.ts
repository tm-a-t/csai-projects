import * as fs from 'fs';
import * as path from 'node:path';
import matter from 'gray-matter';

const pagesDir = 'pages';

type ProjectInfo = {
    path: string;
    data: { [key: string]: any };
}
const projects: ProjectInfo[] = fs
    .readdirSync(pagesDir)
    .filter(file => path.extname(file).toLowerCase() === '.md')
    .map(file => {
        const filePath = path.join(pagesDir, file);
        const parsed = matter(fs.readFileSync(filePath));
        return {
            path: path.basename(filePath, '.md'),
            data: parsed.data,
        };
    })
    .filter(page => !page.data.home);

export default projects;
