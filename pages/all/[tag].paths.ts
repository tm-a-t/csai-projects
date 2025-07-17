import projects, {ProjectInfo} from '../../.vitepress/projects';

export default {
    paths() {
        return [
            projects.map(project => project.data.term)
                .map(term => generatePathData(term, term + ' Projects', filterByTag('term', term))),
            projects.map(project => project.data.type)
                .map(type => generatePathData(type, type + ' List', filterByTag('type', type))),
            projects.flatMap(project => [...project.data.mentors, ...project.data.students])
                .map(person => generatePathData(person, 'Projects By ' + person, filterPeople(person))),
            projects.flatMap(project => project.data.keywords)
                .map(keyword => generatePathData(keyword, titleCase(keyword) + ' Projects', filterByKeyword(keyword))),
        ].flat();
    },
};


function generatePathData(tag: string, title: string, filteredProjects: ProjectInfo[]) {
    return {
        params: {tag, title, projects: filteredProjects},
    };
}

function filterByTag(tagName: string, tag: string): ProjectInfo[] {
    return projects.filter(project => project.data[tagName] === tag);
}

function filterPeople(name: string): ProjectInfo[] {
    return projects.filter(project =>
        project.data.students.includes(name) || project.data.mentors.includes(name),
    );
}

function filterByKeyword(keyword: string): ProjectInfo[] {
        return projects.filter(project => project.data.keywords.includes(keyword));
}

function titleCase(text: string): string {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
