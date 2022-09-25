import { defineStore } from "pinia";

export const useSiteStore = defineStore({
    id: "site-store",
    state: () => {
        return {
            showNavbar: false,
            isActiveLink: false,
            guestDetails: {
                authId: "",
                username: "",
            },
        };
    },
    actions: {
        // toggle navbar and other modals
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
            this.isActiveLink = !this.isActiveLink;
        },
        setGuestDetails({ authId, username }) {
            this.guestDetails.authId = authId;
            this.guestDetails.username = username;
        },
    },
    getters: {},
});
