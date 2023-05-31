<script lang="ts">
    import Popup from '../components/Popup.vue'
    import firebaseConfig from '../firebase.config.js'
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

    const firebase_app = initializeApp(firebaseConfig);
    const db = getFirestore(firebase_app);

    export default {
        components: {
            Popup,
        },
        data() {
            return {
                showPopup: false,
                selectedProject: {},
                projects: []
            }
        },
        async mounted() {
            try {
                const querySnapshot = await getDocs(query(collection(db, "PortfolioWebsite-2.0"), orderBy("id")));
                this.projects = querySnapshot.docs.map((doc) => doc.data());
                console.log("Projects:", this.projects.project);
            } catch (error) {
                console.error("Error retrieving data from Firestore:", error, error.message);
            }
        },
        methods: {
            selectProject(project) {
                this.selectedProject = project;
                this.showPopup = true;
            }
        }
  }
</script>
<template>
    <section class="flex align-center mb-5 mt-4 justify-center">
        <div class="flex flex-wrap gap-2 max-w-[916px] text-white justify-center">
            <div
                class="flex flex-col card h-[210px] w-[250px] rounded-xl cursor-pointer border-2 border-solid relative before:h-full before:left-0 before:absolute before:top-0 before:w-full before:z-10"
                v-for="(project, index) in projects"
                :key="index"
                tabindex="0"
                @click="selectProject(project)"
            >
                <h3 class="text-center p-1 text-xl flex flex-col">{{ project.project }}</h3>
                <p class="text-center">{{ project.short_description }}</p>
            </div>
        </div>
        <popup v-if="showPopup" @close="showPopup = false" :projects="projects" :data="selectedProject" />
    </section>
</template>
