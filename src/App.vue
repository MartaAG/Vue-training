<template>
  <v-app id="inspire">
     <v-app id="inspire">
        <TheNavbar>
          
        </TheNavbar>

       <v-main>
         <v-container
           class="fill-height"
           fluid
         >
           <v-row
             align="center"
             justify="center"
           >
             <v-col class="text-center">
               <HelloWorld>

               </HelloWorld>
             </v-col>
           </v-row>
         </v-container>
       </v-main>
       <v-footer
         color="indigo"
         app
       >
         <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
       </v-footer>
     </v-app>
   </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TheNavbar from './components/TheNavbar';

export default {
  name: 'App',

  components: {
    HelloWorld,
    TheNavbar
  },

  data: () => ({
    //
  }),
};
</script>
