import {
  Flex,
  Image,
  Text,
  Spacer,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";

import {
  CloseButton
} from '@chakra-ui/react'

import React from "react";
import { FormattedMessage } from "react-intl";

import AirdropImg from '../../../../assets/images/airdrop.svg';

export default ({onClose}: any) => {

  return (
    <AlertDialogContent
      borderRadius={'20px'} backgroundColor={'#1F2024'}
      padding="20px"
    >
      <AlertDialogHeader fontSize='lg' fontWeight='bold' borderRadius={'20px'}>
        <Flex>
          <Spacer />
          <Text
            color={'white'}
            overflowWrap={'break-word'}
            display={'inline'}
            textAlign="justify"
          >
            <FormattedMessage id='text.Congratulations'></FormattedMessage>
          </Text>
          <Spacer />
          <CloseButton color="white" onClick={onClose} />
        </Flex>
      </AlertDialogHeader>
      <AlertDialogBody
        paddingInlineStart='0'  
        paddingInlineEnd='0'>
        <Image
          src={AirdropImg}
          sx={{ margin: '0 auto' }}
          width='200px'
          height='200px'
        />
        <Flex>
          <Spacer />
          <Text
            overflowWrap={'break-word'}
            display={'inline'}
            color={'white'}
            textAlign="justify"
            marginTop="10px"
            fontSize="16px"
            alignSelf="center"
          >
            <FormattedMessage id='transfer.gauth.withdraw_success_2fa'></FormattedMessage>
          </Text>
          <Spacer />
        </Flex>
        <Flex>
          <Spacer />
          <Text
            overflowWrap={'break-word'}
            display={'inline'}
            color={'white'}
            textAlign="justify"
            marginTop="10px"
            fontSize="16px"
            alignSelf="center"
          >
            <FormattedMessage id='transfer.gauth.system_sent_bonus'></FormattedMessage>
          </Text>
          <Spacer />
        </Flex>
      </AlertDialogBody>

    </AlertDialogContent>
  );
};
