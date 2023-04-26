<script lang="ts">
    import Popup from '../components/Popup.vue'
    
    export default {
        components: {
            Popup
        },
        data() {
            return {
                showPopup: false,
                selectedProject: {},
                projects: [ 
                    {
                        ID: '1',
                        Name: 'Profielwerkstuk (PWS)',
                        Short: 'Profielwerkstuk/Meesterproef',
                        Description: 'In plaats van een profielwerkstuk (pws) hadden we een "meesterproef". Een meesterproef is een speciaal soort pws waarbij de nadruk wordt gelegd op de oplossing en niet op het onderzoek. Ook moet je bij je meesterproef zelf een probleem zoeken bij een bedrijf. Ik werkte samen met Sadjad en Tim aan de meesterproef. Uiteindelijk werd onze opdrachtgever Abalco B.V. Abalco is een industrieel schoonmaakbedrijf gevestigd in Werkendam die zich specialiseert in verdampers, condensors en compressors. Het probleem die Abalco had is dat ze teveel werk hebben en te weinig tijd, dus de opdracht werd: "Hoe optimaliseren we het schoonmaakproces?" Na lang onderzoek gedaan te hebben naar verschillende oplossingen hebben we gekozen voor een soort zak die het overtollige water opvangt en waardoor de andere persoon niet het water hoeft op te stof zuigen. Dit was de meesterproef in het kort. Ook heb ik hier een pdf bestand met het literatuuronderzoek.',
                        Languages: ['NVT'],
                        Online: 'False',
                        img: ['Abalco.png']
                    },
                    {
                        ID: '2',
                        Name: 'PortfolioWebsite',
                        Short: 'Mijn allereerste website.',
                        Description: 'Nog niks',
                        Languages: ['HTML', 'CSS', 'PHP'],
                        Online: 'False',
                        img: ['']
                    },
                    {
                        ID: '3',
                        Name: 'Kapsalon',
                        Short: 'Een kapsalon modernizeren.',
                        Description: 'Kapsalon maken',
                        Languages: ['HTML', 'CSS', 'PHP', 'Javascript'],
                        Online: 'False',
                        img: ['']
                    },
                    {
                        ID: '4',
                        Name: 'BattleBot',
                        Short: 'Een echte BattleBot bouwen.',
                        Description: 'Battlebot maken',
                        Languages: ['Python'],
                        Online: 'True',
                        img: ['']
                    },
                    {
                        ID: '5',
                        Name: 'PortfolioWebsite 2.0',
                        Short: 'Geüpdatet PortfolioWebsite.',
                        Description: 'PortfolioWebsite-2.0',
                        Languages: ['Vue.JS', 'HTML', 'Tailwind CSS', 'Javascript'],
                        Online: 'True',
                        img: ['']
                    }
                ]
            }
        },
        methods: {
            selectProject(index) {
                this.selectedProject = this.projects[index]
                this.showPopup = true
            }
        }
    }
</script>
<template>
    <section class="flex align-center mb-5 mt-4 justify-center">
        <div class="flex flex-wrap gap-2 max-w-[916px] text-white justify-center">
            <div class="flex flex-col card h-[210px] w-[250px] rounded-xl cursor-pointer border-2 border-solid relative
                        before:h-full before:left-0 before:absolute before:top-0 before:w-full before:z-10
                        " v-for="(project, index) in projects" @click="selectProject(index)" :key="index" tabindex="0">
                <h3 class="text-center p-1 text-xl flex flex-col">{{ project.Name }}</h3>
                <p class="text-center">{{ project.Short }}</p>
            </div>
        </div>
        <popup v-if="showPopup" @close="showPopup = false" :projects="projects" :data="selectedProject" />
    </section>
</template>