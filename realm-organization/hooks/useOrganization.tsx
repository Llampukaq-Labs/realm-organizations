import { useContext } from "react";
import { RealmOrganizationsContext } from "../context/RealmOrganizations";

export function useOrganization<T>() {
  return useContext(RealmOrganizationsContext) as {
    organization: T | undefined;
    getOrganization: (id: string) => Promise<void>;
    createOrganization: (name: string, moreData?: object) => Promise<T>;
    updateOrganization: (data: object) => Promise<void>;
    addMemberOrganization: (id: string) => Promise<void>;
    deleteMemberOrganization: (id: string) => Promise<void>;
    addPanelOrganization: (data: any) => Promise<void>;
    deletePanelOrganization: (panel: string) => Promise<void>;
  };
}
