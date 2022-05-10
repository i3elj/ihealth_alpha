import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import 
{ Modal
  , StyleSheet
  , Text
  , View
  , Pressable
  , ScrollView 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon from ''

export default function App() {
  const [hidden, setHidden] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.topbar}>
          <Pressable><Text style={styles.Text1}>Home</Text></Pressable>
          <Pressable style={styles.searchButton}>
            <Icon
              name='md-search'
              size={17}
              />
          </Pressable>
        </View>
        <View style={styles.areas}>
          <Text style={styles.Text3}>Areas</Text>
          <ScrollView style={styles.areasButtons} horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <View style={styles.subareas}>
              <View style={styles.subareaImage}></View>
              <View style={styles.subareaText}><Text style={styles.Text4}>Dentist</Text></View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.categories}>
          <Text style={styles.Text3}>Categories</Text>
          <ScrollView style={styles.categoriesButtons} horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <View style={styles.category}>
              <View style={styles.categoryImage}></View>
              <View style={styles.subareaText}><Text style={styles.Text4}>Endocrino</Text></View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.recommendedBar}>
          <Text style={styles.recommendedTitle}>RECOMMENDED</Text>
          <Pressable><Text style={styles.Text5}>filters</Text></Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
          <View style={styles.recommendedClinic}>
            <View style={styles.clinicImage}></View>
            <View style={styles.clinicInformations}>
              <View style={styles.clinicNameDescription}>
                <View style={styles.clinicName}><Text>Clinic Name</Text></View>
                <Text style={styles.clinicDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Text>
              </View>
              <View style={styles.clinicInfoDetails}>
                <View style={styles.clinicInfoRate}>
                  <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/> <Icon name='star'/>
                </View>
                <Text style={styles.clinicInfoLocation}><Icon name='location'/>97 Pierce St. Chester, PA</Text>
                <Text style={styles.clinicInfoDistance}>2 km</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal animationType="slide" transparent={true} visible={hidden}>
        <View style={styles.modalBase}>
          <View style={styles.modalTop}>
            <Pressable onPress={() => {setHidden(!hidden)}}>
              <Icon style={styles.footerIcon} name='chevron-up-outline'/>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.footer}>
        <Pressable onPress={() => {setHidden(!hidden)}}>
          <Icon style={styles.footerIcon} name='chevron-up-outline'/>
        </Pressable>
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
    color: '#C4C4C4',
    borderColor: '#C4C4C4',
  },
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
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  areasButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  subareas:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 14
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
    marginBottom: 20,
  },
  categoriesButtons:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  category:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 14
  },
  categoryImage:{
    width: 100,
    height: 50,
    backgroundColor: '#F9D1E4',
    borderRadius: 20,
    borderWidth: 1,
  },
  recommendedBar:{
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendedTitle: {
    color: '#919191',
  },
  ScrollView: {
    height: 12
  },
  recommendedClinic:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 20,
  },
  clinicInformations: {
    flex: 1,
  },
  clinicImage:{
    width: 70,
    height: 70,
    backgroundColor: '#B7EFD4',
    borderRadius: 50,
    marginRight: 20,
  },
  clinicNameDescription:{
    flex: 1,
  },
  clinicName:{
    marginBottom: 5,
  },
  clinicDescription: {
    color: '#464646',
    textAlign: 'justify',
    fontSize: 11,
  },
  clinicInfoDetails:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  clinicInfoRate:{
    display: 'flex',
    flexDirection: 'row',
  },
  clinicInfoLocation:{
    fontSize: 10,
    color: '#848484',
  },
  clinicInfoDistance:{
    fontSize: 11,
    color: '#848484',
  },
  footer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B7EFD4',
    borderTopEndRadius: 18,
    borderTopStartRadius: 18,
  },
  footerIcon: {
    transform: [{ translateY: -2}],
    fontSize: 28,
    color: 'rgb(145, 145, 145)',
  }
});
