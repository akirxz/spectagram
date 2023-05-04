import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/FeedScreen";
import CreatePost from "../screens/CreatePost";
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
  return (
      <Tab.Navigator
        labaled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'Criar Postagem') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icon} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Criar Postagem" component={CreatePost} />
      </Tab.Navigator>
  );

}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2a2a2a",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
  },
  icon: {
    width: RFValue(30),
    height: RFValue(30)
  }
})
export default BottomTabNavigator