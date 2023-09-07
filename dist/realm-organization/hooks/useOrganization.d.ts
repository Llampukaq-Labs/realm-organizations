export declare const useOrganization: () => {
    getOrganization: (userRealm: any, user: {
        userId: string;
        organizations: {
            name: string;
            organizationId: string;
        }[];
    }) => Promise<void>;
    createOrganization: (name: string, moreData?: object) => Promise<void>;
    updateOrganization: (data: any) => Promise<void>;
    addMemberOrganization: (id: string) => Promise<void>;
    deleteMemberOrganization: (id: string) => Promise<void>;
    addPanelOrganization: (data: any) => Promise<void>;
    deletePanelOrganization: (panel: string) => Promise<void>;
};