import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <View style={styles.main}>
            <View style={styles.topbar}>
               <Pressable><Text>Home</Text></Pressable>
               <Pressable><Text>Search</Text></Pressable>
            </View>
            <View style={styles.areas}>
               <Text>Areas</Text>
               <View style={styles.areasButtons}>
                  <View style={styles.subareas}>
                     <View style={styles.subareaImage}></View>
                     <Text>Generalist</Text>
                  </View>
                  <View style={styles.subareas}>
                     <View style={styles.subareaImage}></View>
                     <Text>Physiotherapist</Text>
                  </View>
                  <View style={styles.subareas}>
                     <View style={styles.subareaImage}></View>
                     <Text>Dentist</Text>
                  </View>
               </View>
            </View>
            <View style={styles.categories}>
               <Text>Categories</Text>
               <View style={styles.categoriesButtons}>
                  <View style={styles.category}>
                     <View style={styles.categoryImage}></View>
                     <Text>Pediatrician</Text>
                  </View>
                  <View style={styles.category}>
                     <View style={styles.categoryImage}></View>
                     <Text>Cardiologist</Text>
                  </View>
                  <View style={styles.category}>
                     <View style={styles.categoryImage}></View>
                     <Text>Endocrinologist</Text>
                  </View>
               </View>
            </View>
            <View style={styles.recommendeds}>
               <View style={styles.recommendedsTop}>
                  <Text>RECOMMENDEDS</Text>
                  <Pressable><Text>filters</Text></Pressable>
               </View>
               <View style={styles.recommendedClinic}>
                  <View style={styles.clinicImage}></View>
                  <View style={styles.clinicInfo}>
                     <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                     <Text>Description</Text>
                     <View style={styles.clinicInfoRate}></View>
                  </View>
               </View>
            </View>
         </View>
         <View style={styles.footer}>
            <Pressable></Pressable>
         </View>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   main: {
      flex: 1,
   },
   topbar:{
      backgroundColor: '#B7EFD4',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      marginBottom: 20,
   },
   recommendedsTop:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   recommendedClinic:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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
   },
});
