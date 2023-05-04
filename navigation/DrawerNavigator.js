import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="tela inicial" component={TabNavigator}>
            </Drawer.Screen>
            <Drawer.Screen name="profile" component={Profile}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator