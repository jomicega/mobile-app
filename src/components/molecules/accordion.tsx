import React, { useState } from 'react';
import { Center, ZStack, Icon, IconButton, View, Text } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface AccordionProps {
  title: string;
  content: any;
}

const Accordion = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <View marginRight='10px' marginLeft='10px'>
      <View
        bg='indigo.300'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        paddingLeft='15px'
        paddingTop='15px'
        paddingRight='15px'
        paddingBottom='15px'
        marginRight='10px'
        marginLeft='10px'
        marginTop='100px'
      >
        <Text marginLeft='10px'>{props.title}</Text>
        <IconButton
          onPress={() => setOpen(!open)}
          icon={
            <Icon
              as={AntDesign}
              name={open === false ? 'caretdown' : 'caretup'}
            />
          }
        />
      </View>
      {open && (
        <View
          paddingLeft='15px'
          paddingTop='15px'
          paddingRight='15px'
          marginRight='10px'
          paddingBottom='15px'
          marginLeft='10px'
        >
          {props.children}
        </View>
      )}
    </View>
  );
};

export default Accordion;
