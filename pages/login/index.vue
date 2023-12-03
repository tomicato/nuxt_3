<template>
    <div class="w-1/2 mx-auto card shadow rounded shadow-lg shadow-emerald-500 mt-32">

        <h3 class="mb-8 text-center pt-14 text-2xl">Login Page &nbsp;</h3> <!-- Add the style and icon you want using the Array format -->

        <div class="mx-auto w-1/2 my-5">
            <form id="formTest" class="p-3" @submit.prevent="loginForm">

                <div class="mb-8">
                    <label for="email" class="flex mb-2">Email</label>
                    <input type="email" name="email" v-model="form.email" id="email" placeholder="Enter email" autocomplete="false"
                           class="w-full bg-slate-300 text-gray-700 rounded-md focus:bg-gray-500 focus:text-white focus:outline-none px-3 py-1.5">
                </div>

                <div class="mb-8">
                    <label for="password" class="flex mb-2">Password</label>
                    <input type="password" name="password" v-model="form.password" id="password" autocomplete="false" placeholder="Enter password"
                           class="w-full bg-slate-300 text-gray-700 rounded-md focus:bg-gray-500 focus:text-white focus:outline-none px-3 py-1.5">
                </div>

                <button type="submit" class="my-16 w-1/2 flex justify-center bg-gray-500 border text-white rounded-md px-3 py-2"> Login</button>

            </form>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            }
        }
    },
    beforeMount() {
        this.form.email = null
        this.form.password = null
    },
    methods: {
        loginForm() {
            alert(this.form.email + ' ' + this.form.password);
            this.form.email = null
            this.form.password = null
            return 0;
        }
    }
}
</script>

<style scoped lang="scss">
    #password:focus, #password:active, #email:focus{
        border-color: transparent!important;
    }
</style>
