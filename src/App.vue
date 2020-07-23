<template>
  <v-app id="inspire">
     <v-app id="inspire">

        <TheNavbar />

       <v-main>
         <v-container
           class="fill-height"
         >
           <v-row
             align="center"
             justify="center"
             align-content="center"
           >
             <v-col
             cols="7"
             class="text-center">

                 <router-view />

             </v-col>
           </v-row>
         </v-container>
       </v-main>

       <v-footer
         color="deep-purple accent-4"
         app
       > 
         <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
       </v-footer>
     </v-app>
   </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar';

export default {
  name: 'App',

  components: {
    TheNavbar
  }
}
</script>
