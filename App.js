import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.main}>
            <View style={styles.topbar}>
               <Pressable><Text style={styles.Text1}>Home</Text></Pressable>
               {/* <Pressable style={styles.searchButton}><Text style={styles.Text2}>Search</Text></Pressable> */}
               <Pressable style={styles.searchButton}>
                  <Icon
                     name='md-search'
                     size={17}
                  />
               </Pressable>
            </View>
            <View style={styles.areas}>
               <Text style={styles.Text3}>Areas</Text>
               <View style={styles.areasButtons}>
                  <Pressable style={styles.subareas}>
                     <View style={styles.subareaImage}></View>
                     <View style={styles.subareaText}><Text style={styles.Text4}>Generalist</Text></View>
                  </Pressable>
                  <View style={styles.subareas}>
                     <View style={styles.subareaImage}></View>
                     <View style={styles.subareaText}><Text style={styles.Text4}>Physio</Text></View>
                  </View>
                  <View style={styles.subareas}>
                     <View style={styles.subareaImage}></View>
                     <View style={styles.subareaText}><Text style={styles.Text4}>Dentist</Text></View>
                  </View>
               </View>
            </View>
            <View style={styles.categories}>
               <Text style={styles.Text3}>Categories</Text>
               <View style={styles.categoriesButtons}>
                  <View style={styles.category}>
                     <View style={styles.categoryImage}></View>
                     <View style={styles.subareaText}><Text style={styles.Text4}>Pediatrician</Text></View>
                  </View>
                  <View style={styles.category}>
                     <View style={styles.categoryImage}></View>
                     <View style={styles.subareaText}><Text style={styles.Text4}>Cardio</Text></View>
                  </View>
                  <View style={styles.category}>
                     <View style={styles.categoryImage}></View>
                     <View style={styles.subareaText}><Text style={styles.Text4}>Endocrino</Text></View>
                  </View>
               </View>
            </View>
            <View style={styles.recommendeds}>
               <Text>RECOMMENDED</Text>
               <Pressable><Text style={styles.Text5}>filters</Text></Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
            </ScrollView>
         </View>
         <View style={styles.footer}>
            <Pressable></Pressable>
         </View>
         <StatusBar style="auto" hidden="true" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   Text1: {
      fontSize: 15,
   },
   Text2: {
      fontSize: 15,
   },
   Text3: {
      fontSize: 14,
   },
   Text4: {
      fontSize: 10,
   },
   Text5: {
      fontSize: 12,
      borderWidth: 1,
      borderRadius: 20,
      paddingTop: 1.5,
      paddingBottom: 1.5,
      paddingLeft: 3,
      paddingRight: 3,
   },
   // searchButton: {
   //    borderWidth: 1,
   //    borderRadius: 20,
   // },
   searchButton: {
   },
   main: {
      flex: 1,
   },
   topbar:{
      backgroundColor: '#B7EFD4',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
   },
   areas:{
      margin: 20,
   },
   areasButtons: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
   },
   subareas:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   subareaImage: {
      width: 100,
      height: 100,
      backgroundColor: '#F9D1E4',
      borderRadius: 20,
      borderWidth: 1,
   },
   subareaText: {
      backgroundColor: '#F9e1d8',
      borderWidth: 1,
      borderRadius: 20,
      padding: 4,
      transform: [{ translateY: -10}]
   },
   categories:{
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20,
   },
   categoriesButtons:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
   },
   category:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   categoryImage:{
      width: 100,
      height: 50,
      backgroundColor: '#F9D1E4',
      borderRadius: 20,
      borderWidth: 1,
   },
   recommendeds:{
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   ScrollView: {
      height: 12
   },
   recommendedClinic:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
      marginLeft: 20,
      marginRight: 20,
   },
   clinicImage:{
      width: 50,
      height: 50,
      backgroundColor: '#B7EFD4',
      borderRadius: 50,
      marginRight: 20,
   },
   clinicInfo:{},
   clinicName:{
      marginBottom: 5,
   },
   clinicInfoRate:{},
   footer:{
      backgroundColor: '#B7EFD4',
      height: 30,
      marginTop: 12,
   },
});
