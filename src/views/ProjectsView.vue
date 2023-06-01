<script lang="ts">
    import Popup from '../components/Popup.vue'
    import firebaseConfig from '../firebase.config.js'
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";

    const firebase_app = initializeApp(firebaseConfig); // Initialize Firebase
    const db = getFirestore(firebase_app); // Get a reference to the database service

    export default {
        components: {
            Popup, // Popup component
        },
        data() {
            return {
                showPopup: false,
                selectedProject: {},
                projects: []
            }
        },
        async mounted() { // Get data from Firestore
            try {
                const querySnapshot = await getDocs(query(collection(db, "PortfolioWebsite-2.0"), orderBy("id")));
                this.projects = querySnapshot.docs.map((doc) => doc.data());
            } catch (error) {
                console.error("Error retrieving data from Firestore:", error, error.message);
            }
        },
        methods: { // Select project and show popup
            selectProject(project) {
                this.selectedProject = project;
                this.showPopup = true;
            }
        }
    }
</script>
<template>
    <div class="text-white text-4xl bg-neutral-800 py-5">
        <h1 class="ml-4"><b>Mijn Projecten</b></h1>
    </div>
    <section class="flex align-center mb-5 mt-4 justify-center">
        <div class="flex flex-wrap gap-2 max-w-[916px] text-white justify-center">
            <div
                class="flex flex-col card h-[280px] w-[250px] rounded-xl cursor-pointer border-2 border-solid relative before:h-full before:left-0 before:absolute before:top-0 before:w-full before:z-10"
                v-for="(project, index) in projects"
                :key="index"
                tabindex="0"
                @click="selectProject(project)"
            >
                <h3 class="text-center p-1 text-xl flex flex-col">{{ project.project }}</h3>
                <p class="ml-4">{{ project.short_description }}</p>
                <div class="text-sky-400 border-b-4 card">
                    <div class="ml-4">{{ project.type }}</div>
                </div>
                <div class="overflow-hidden mt-0.5 rounded-b-xl">
                    <img :src="project.photo"  alt="Afbeelding van het project" class="object-cover object-center h-[200px] w-full" />
                </div>
            </div>
        </div>
        <popup v-if="showPopup" @close="showPopup = false" :projects="projects" :data="selectedProject" />
    </section>
</template>
