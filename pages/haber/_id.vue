<template>
  <div>
      <v-container>
              <div>
                  <v-img
                class="white--text align-end"
                height="200"
                width="200"
                :src="`${data.image}`"
                v-if="data.image && data.image.default"
              >
              </v-img>
                  <v-img
                class="white--text align-end"
                height="200"
                width="200"
                :src="require('@/assets/images/muhtar/default.jpeg')"
                v-else
              >
              </v-img>
              </div>
          <v-list-item three-line>
            <v-list-item-content>
              <h4 class="text-h2 font-weight-bold"> {{ data.title }} </h4> 
              
            </v-list-item-content>
          </v-list-item>
          <p class="subheading mb-3">{{ data.content }} </p>

          <p class="mt-15"> <span class="text-h5 mb-1">{{ data.author }} </span> tarafından 
            <span class="text-h5 mb-1"> {{ data.created_at }} </span> tarihinde olusturuldu. </p>
      </v-container>
  </div>
</template>

<script>
export default {

      async asyncData({params, $axios}) {
        return await $axios.$get(`api/news/${params.id}`)
            .then(response => {
                let data = response.data
                console.log(response.data);
                return { data }
            }).catch(error => {
              console.log('Request cancelled' , error)
          })
      },
      data(){
        return {
          data:{
            image:{
              default:' '
            }
          }
        }
      }

}
</script>

<style>

</style>