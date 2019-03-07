import React from 'react';
import {StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Beautiful Flowers",                  time:"2018-08-01 12:15 pm", image:"https://lorempixel.com/400/200/nature/6/", description:"Happiness radiates like the fragrance from a flower and draws all good things towards you..."},
        {id:2, title: "Enjoying Sunset",             time:"2018-08-12 12:00 pm", image:"https://lorempixel.com/400/200/nature/5/", description:"Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky..."} ,
        {id:3, title: "Natural Beauty ",            time:"2017-08-05 12:21 pm", image:"https://lorempixel.com/400/200/nature/4/", description:"Look deep into nature, and then you will understand everything better..."}, 
        {id:4, title: "Fragrance",         time:"2015-08-12 12:00 pm", image:"https://lorempixel.com/400/200/nature/6/", description:"Happiness radiates like the fragrance from a flower and draws all good things towards you..."}, 
        {id:5, title: "Cricket Love",           time:"2013-06-12 12:11 pm", image:"https://lorempixel.com/400/200/sports/1/", description:"Cricket is a most precarious profession; it is called a team game but, in fact, no one is so lonely as ..."}, 
        {id:6, title: "Beautiful Monday",        time:"2018-08-12 12:56 pm", image:"https://lorempixel.com/400/200/nature/8/", description:"Our greatest glory is not in never falling but in rising every time we fall..."}, 
        {id:7, title: "Hardwork",    time:"2018-08-12 12:33 pm", image:"https://lorempixel.com/400/200/nature/1/", description:"The ant is knowing and wise, but he doesn't know enough to take a vacation..."}, 
        {id:8, title: "Natural Beauty",          time:"2018-06-12 12:44 pm", image:"https://lorempixel.com/400/200/nature/3/", description:"Look deep into nature, and then you will understand everything better..."},
        {id:9, title: "Monsoon Is Coming", time:"2012-07-12 12:23 pm", image:"https://lorempixel.com/400/200/nature/4/", description:"The monsoons were the real thing; they dissolved things to the bone..."},
      ]
    };
  }



  static navigationOptions = {
    title: 'Posts',
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <View style={styles.timeContainer}>
                      <Image style={styles.iconData} source={{uri: 'https://png.icons8.com/color/96/3498db/calendar.png'}}/>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/96/2ecc71/visible.png'}}/>
                        <Text style={styles.socialBarLabel}>78</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/2ecc71/comments.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /* card */
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor:"#EEEEEE",
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /* card components */
  title:{
    fontSize:18,
    flex:1,
  }, 
  description:{
    fontSize:15,
    color:"#888",
    flex:1,
    marginTop:5,
    marginBottom:5,
  },
  time:{
    fontSize:13,
    color: "#808080",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  iconData:{
    width:15,
    height:15,
    marginTop:5,
    marginRight:5
  },
  timeContainer:{
    flexDirection:'row'
  },
  /* social bar */
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
