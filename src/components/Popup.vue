<script lang="ts">
    export default {
        name: 'Popup',
        props: ['data', 'projects'],
        emits: ['close'],
        data() { // Initialize data
            return {
                showPopup: true,
                selectedProject: {},
                searchQuery: '',
            };
        },
        computed: { // Get data from Firestore
            currentProject() {
                return this.selectedProject || this.data;
            },
            comma_array() { // Convert array to comma separated string
                const list = this.selectedProject.languages || this.data.languages;
                return list.join(', ');
            },
            filteredList() { // Filter projects based on search query
                return this.projects.filter((project) => {
                    const projectNameMatches = project.project.toLowerCase().includes(this.searchQuery.toLowerCase());
                    const languageMatches = project.languages.some((language) =>
                        language.toLowerCase().includes(this.searchQuery.toLowerCase())
                    );
                    return projectNameMatches || languageMatches;
                });
            },
        },
        methods: { // Select project
            selectProject(project) {
                this.selectedProject = project;
            },
        },
    };
</script>

<template>
    <div class="fixed inset-y-0 right-0 z-20 bg-white w-[600px] animate-[popupin_0.3s_ease-out]">
        <aside class="bg-gray-100 absolute -left-[170px] max-w-[170px] h-full rounded-l-lg border-r-2 border-r-gray-200 border-solid">
            <ul class="">
                <li class="">
                    <label for="search">Zoek taal of Project</label>
                    <input id="search" class="w-[130px] m-4 p-1 rounded-md" type="search" v-model="searchQuery" placeholder="Zoek op taal..." maxlength="20" />
                </li>
                <li>
                <div>
                    <b>Resultaten:</b>
                </div>
                </li>
                <li
                class="cursor-pointer m-4 hover:bg-gray-500 hover:text-clip hover:whitespace-normal w-30 p-1 rounded-md truncate break-normal"
                tabindex="0"
                v-for="project in filteredList"
                :key="project.ID"
                @click="selectProject(project)"
                >
                    {{ project.project }}
                </li>
            </ul>
        </aside>
        <article class="text-black m-4 pr-3">
            <header class="mb-2 font-bold text-xl">
                <h3 v-if="!currentProject.project">{{ data.project }}</h3>
                <h3 v-else>{{ currentProject.project }}</h3>
                <a class="text-white z-10 absolute top-3 -left-[210px] opacity-100 hover:cursor-pointer p-1 pl-4 bg-black rounded-l-full w-10" @click.self="$emit('close')">&times;</a>
            </header>
            <p v-if="!currentProject.long_description">{{ data.long_description }}</p>
            <p v-else>{{ currentProject.long_description }}</p>
            <br />
            <div>
                <p>
                    <b>Talen:</b>
                    <ul class="flex">
                        <li v-if="!currentProject.languages" v-for="language in data.languages">{{ language }},&nbsp;</li>
                        <li v-else v-for="language in currentProject.languages">{{ language }},&nbsp;</li>
                    </ul>
                </p>
            </div>
        </article>
    </div>
    <div class="fixed h-full w-full inset-0 z-10 bg-gray-800 bg-opacity-40 overflow-hidden" @click="$emit('close')"></div>
</template>
