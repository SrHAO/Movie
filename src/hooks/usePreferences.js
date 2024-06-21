import React, { useContext } from "react";
import PreferencesContext from "../context/PreferencesContext";
import { StyleSheet, Text, View } from 'react-native'

export default () => useContext(PreferencesContext);
