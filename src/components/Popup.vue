<script lang="ts">
    export default {
        name: 'Popup',
        props: ['data', 'projects'],
        emits: ['close'],
        data() {
            return {
                showPopup: true,
                selectedProject: {},
                searchQuery: '',
            }
        },
        computed: {
            currentProject() {
                return this.selectedProject || this.data;
            },
            comma_array() {
                const list = this.selectedProject.Languages || this.data.Languages
                return list.join(', ')
            },
            filteredList() {
                return this.projects.filter(project => {
                    const projectNameMatches = project.Name.toLowerCase().includes(this.searchQuery.toLowerCase());
                    const languageMatches = project.Languages.some(language => language.toLowerCase().includes(this.searchQuery.toLowerCase()));
                    return projectNameMatches || languageMatches;
                });
            }
        },
        methods: {
            selectProject(project) {
                this.selectedProject = project;
            }
        },
    }
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
                <li>
                    {{ projects.projectNameMatches }}
                </li>
                <li class="cursor-pointer m-4 hover:bg-gray-500 hover:text-clip hover:whitespace-normal w-30 p-1 rounded-md truncate break-normal" tabindex="0" v-for="project in filteredList" :key="project.ID" @click="selectProject(project)">
                    {{ project.Name }}
                </li>
                <!-- <li class="cursor-pointer m-4 hover:bg-gray-500 hover:text-clip hover:whitespace-normal w-30 p-1 rounded-md truncate break-normal" v-for="project in projects" :key="project.ID" @click="selectProject(project)">{{ project.Name }}</li> -->
            </ul>
        </aside>
        <article class="text-black m-4 pr-3">
            <header class="mb-2 font-bold text-xl">
                <h3 v-if="!currentProject.Name">{{ data.Name }}</h3>
                <h3 v-else>{{ currentProject.Name }}</h3>
                <a class="text-white z-10 absolute top-3 -left-[210px] opacity-100 hover:cursor-pointer p-1 pl-4 bg-black rounded-l-full w-10" @click.self=" $emit('close')">&times;</a>
            </header>
            <p v-if="!currentProject.Description">{{ data.Description }}</p>
            <p v-else>{{ currentProject.Description }}</p>
            <br>
            <div>
                <p>
                    <b>Talen:</b>
                    <ul class="flex">
                        <li v-if="!currentProject.Languages" v-for="Language in data.Languages">{{ Language }},&nbsp;</li>
                        <li v-else v-for="Language in currentProject.Languages">{{ Language }},&nbsp;</li>
                    </ul>
                </p>
            </div>
        </article>
    </div>
    <div class="fixed h-full w-full inset-0 z-10 bg-gray-800 bg-opacity-40 overflow-hidden" @click="$emit('close')"></div>
</template>