export interface IClaBotOptions {
    app: any,
    token: string,
    templates: Object,
    templateData: Object,
    secrets: Object,
    skipCollaborators: Object,
    skipContributors: Object,
    getContractor(callback: Function),
    addContractor(contractor: any, callback: Function)
}
