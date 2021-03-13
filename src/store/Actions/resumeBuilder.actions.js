export const SET_PROJECTS='SET_PROJECTS'
export const SET_PARTNERS='SET_PARTNERS'
export function setProjects(projects){
    return{
        type:SET_PROJECTS,
        projects
    }
}
export function setPartners(partners){
    return{
        type:SET_PARTNERS,
        partners
    }
}