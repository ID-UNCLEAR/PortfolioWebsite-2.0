<script lang="ts">
    import emailjs from '@emailjs/browser';
    export default {
        data() {
            return {
                form: {
                name: '',
                email: '',
                organisation: '',
                message: ''
                },
                emailSent: false,
                sendingEmail: false, // add a sendingEmail flag
                errorMessage: null // add an errorMessage property for error handling
            }
        },
        methods: {
            sendEmail() {
                this.sendingEmail = true; // set sendingEmail to true before sending the email
                emailjs.sendForm('service_9g0qeen', 'template_283xfzp', this.$refs.form, 'QhsnPaJl5m1diU_k9')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    this.sendingEmail = false; // set sendingEmail back to false once we receive a response
                        this.emailSent = true;
                        this.form.name = '';
                        this.form.email = '';
                        this.form.organisation = '';
                        this.form.message = '';
                }, (error) => {
                    console.log('FAILED...', error.statusCode, error.status, error.text);
                    this.sendingEmail = false; // set sendingEmail back to false if there's an error
                    switch (error.statusCode) {
                        case 400:
                        this.errorMessage = 'Bad request: Invalid parameters.';
                        break;
                        case 401:
                        this.errorMessage = 'Unauthorized: Authentication failed.';
                        break;
                        case 403:
                        this.errorMessage = 'Forbidden: Request blocked due to rate limiting or invalid credentials.';
                        break;
                        case 500:
                        this.errorMessage = 'Internal Server Error: Something went wrong on the server.';
                        break;
                        default:
                        this.errorMessage = `Error sending email: ${error.text}`;
                    }                
                })
            }
        },
    }
</script>

<template>
    <main class="">
        <section class="text-white ml-4 mb-4 mr-0.5 sm:mb-0 sm:mr-0">
            <h1>Contact</h1>
            <p>
                Als je vragen hebt of feedback hoor ik dat graag!
                <br />
                Hier zijn meerdere manieren om contact met me op te nemen.
            </p>
            <div class="border-solid border-gray-500 border-2 rounded-xl p-4 mr-8 mt-4 max-w-5xl">
                <p>
                    <b>Stuur een bericht</b>
                    <br />
                    Stuur een bericht en er zal zo snel mogelijk geantwoord worden.
                </p>
                <hr />
                <fieldset class="mt-4"  v-if="!emailSent">
                    <form id="form" class="flex flex-col" ref="form" @submit.prevent="sendEmail" enctype="multipart/form-data">
                        <div class="flex flex-col sm:flex-row sm:gap-2.5 ">
                            <div class="flex flex-col">
                                <label for="Naam">Volledige Naam*</label>
                                <input id="Naam" class="text-black rounded w-auto max-w-xs" type="text" name="user_name" placeholder="Type volledige naam hier" required v-model="form.name" />
                            </div>
                            <div class="flex flex-col mt-4 sm:m-0">
                                <label for="Organisatie">Organisatie</label>
                                <input id="Organisatie" class="text-black rounded w-auto max-w-xs" type="text" name="user_organisation" placeholder="Type volledige organisatie hier" v-model="form.organisation" />
                            </div>
                        </div>
                        <label for="E-mail" class="mt-4">E-mailadres*</label>
                        <input id="E-mail" class="text-black rounded w-auto max-w-xs" type="email" name="user_email" placeholder="Type volledig e-mailadres hier" required v-model="form.email" />
                        <label class="mt-4">Bericht*</label>
                        <textarea class="text-black rounded resize-none" name="message" spellcheck="false" autocomplete="off" placeholder="Type volledig bericht hier..." rows="6" cols="3" wrap="hard" required v-model="form.message"></textarea>
                        <div class="flex">
                            <input id="legal" type="checkbox" required />
                            <label for="legal" class="text-sm">Door gebruik te maken van dit formulier gaat u akkoord met de opslag en verwerking van uw gegevens door deze website</label>                            
                        </div>
                        <div v-if="sendingEmail && !emailSent">E-mail wordt verzonden...</div>
                        <div v-if="errorMessage">
                            <dialog class="color-black rounded-xl flex flex-col" open>
                                <button @click="errorMessage = null">&times;</button>
                                <p>{{ errorMessage }}</p>
                            </dialog>
                        </div>
                        <input class="justify-center bg-red-300 rounded-xl mt-4 w-20" type="submit" value="Verstuur">                
                    </form>
                </fieldset>
                <p v-else>E-mail succesvol verzonden!</p>
            </div>
        </section>
    </main>
</template>