import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function SelectCategory() {
    const [state, setState] = useState('java');
    return (
        <Picker
            selectedValue={state}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue) =>
                setState(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
    );
};