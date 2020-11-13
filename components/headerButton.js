import React from "react"
import {HeaderButton} from "react-navigation-header-buttons"
import {Ionicons} from "@expo/vector-icons"

const CustomBtn = props =>(
    <HeaderButton {...props} iconSize={23} IconComponent={Ionicons} color={"#fff"}   />
)

export default CustomBtn