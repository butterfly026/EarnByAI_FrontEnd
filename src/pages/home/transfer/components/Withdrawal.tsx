import { Divider, Flex, Image, Input, Text } from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSetState } from 'react-use';
import MoneyImg from '@/assets/images/usdc.svg';
import {
  MyIcon,
  PrimaryButton,
  computeMoney,
  formatCoins,
  formatMoney,
  stateActions
} from '@/common';
import InputChange from './InputChange';
import ChangeNetwork from '@components/ChangeNetwork';
import { useEffect, useRef } from 'react';
import CoinbaseCardForTheEUAndUK from '@pages/home/help/Coinbase-Card-for-the-EU-and-UK';
import { request } from '@/common';
import { useAccount} from "wagmi";

const styles = {
  FormC: {
    border: '1px solid #b2b2b238',
    borderRadius: '8px',
  },
  MPointer: {
    cursor: 'pointer',
  },
  ArrowBackIcon: {
    position: 'absolute',
  },
};

export default ({ methods, user, price, res }: any) => {
  const [data, setData] = useSetState<any>({
    amount: '',
  });

  const { address, connector} = useAccount();

  console.log("address", address);

  const intl = useIntl();

  const onSubmit = () => {
    //提交
    if (parseFloat(data.amount) >= res.min) {
      methods.withdraw(parseFloat(data.amount), res, setData);
    }    
  };

  const userAddr = user?.address ?? '';
  const inputRef = useRef<HTMLInputElement>(null);
  const isTextOverflowing = () => {
    const elemStyle = inputRef?.current && window.getComputedStyle(inputRef?.current);
    if (elemStyle) {
      const charWidth = parseFloat(elemStyle.fontSize);
      const containerWidth = parseFloat(elemStyle.width);
      const maxCharsPerLine = Math.floor(containerWidth / charWidth);
      return userAddr.length - maxCharsPerLine * 1.8 + 5;

    } else {
      return 0;
    }
  }
  const getEmphasisText = () => {
    if (inputRef?.current) {
      const len = isTextOverflowing();
      const txt = userAddr;
      const txt1 = txt.substring(txt.length - (txt.length - len) / 2 + 3, txt.length);
      return txt.substring(0, (txt.length - len) / 2) + '...' + txt1;
    } else {
      return '';
    }
  }
  const setAddrValue = () => {
    if (isTextOverflowing() > 0) {
      if (inputRef?.current) {
        const ctr = getEmphasisText();
        inputRef.current.value = getEmphasisText();
      }
    } else {
      if (inputRef?.current) {
        inputRef.current.value = userAddr;
      }
    }
  }
  useEffect(() => {
    setAddrValue();
    function handleResize() {
      setAddrValue();
    }
    if (inputRef?.current) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [inputRef]);

  const CheckAmount = (val: any) => {
    if (!val) {
      return {
        status: true,
        label: intl.formatMessage({ id: 'transfer.requiredAmount2' }),
      };
    }
    val = parseFloat(val);
    if (val > res?.max) {
      return {
        status: true,
        label: intl.formatMessage({ id: 'transfer.requiredAmount3' }),
      };
    } else if (val < res?.min) {
      return {
        status: true,
        label:
          intl.formatMessage({ id: 'transfer.requiredAmount4' }) +
          formatMoney(res?.min, ''),
      };
    } else {
      return { status: false, label: '' };
    }
  };

  return (
    <Flex flexDir='column'>
      <Flex
        justifyContent='center'
        alignItems='center'
        pt={8}
        pb={2}
        color='#0052ff'
      >
        <InputChange
          defaultval={data.amount}
          value={data.amount}
          placeholder='0'
          onChange={(val: number) => {
            setData({ amount: val });
          }}
        />
      </Flex>
      <Flex
        color='#5b616e'
        w='full'
        justifyContent='center'
        mb={4}
        h='18px'
        sx={{ textAlign: 'center' }}
      >
        {CheckAmount(data.amount).label}
      </Flex>
      <Flex justifyContent='center'>
        <Text
          pt={0.5}
          pb={1}
          px={4}
          sx={{
            cursor: 'pointer',
            bg: '#f5f8ff',
            fontSize: '1rem',
            border: '1px solid #dedfe2',
            borderRadius: '6px',
            color: '#89909e',
          }}
          onClick={() => {
            console.log(res.balance, 'res.balance');
            setData({ amount: ('' + res.balance).replace(',', '') });
          }}
        >
          <FormattedMessage id='text.SendAll' />
        </Text>
      </Flex>
      <Flex
        mx={{ base: 1, sm: 1, md: 9, lg: 9 }}
        sx={styles.FormC}
        mt={6}
        flexDir='column'
      >
        <Flex
          alignItems='center'
          py='24px'
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color='#5b616e'
          w='full'
        >
          <Flex
            alignItems='center'
            w='140px'
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight='var(--cds-fontWeights-medium)'
              w={{ base: '90px', sm: '90px', md: '100px', lg: '100px' }}
            >
              <FormattedMessage id='text.PayWith' />
            </Text>
            <Image borderRadius='full' w='30px' h='30px' src={MoneyImg} />
          </Flex>
          <Flex flex='1' pl={3}>
            <Text>USD Coin</Text>
          </Flex>
          {/* <Icon fontSize="30px" as={ChevronRightIcon} /> */}
        </Flex>
        <Divider />
        <ChangeNetwork />
        <Divider />
        <Flex
          alignItems='center'
          py='19px'
          px={{ base: 2, sm: 2, md: 4, lg: 4 }}
          color='#5b616e'
          w='full'
        >
          <Flex
            alignItems='center'
            w='140px'
            pl={{ base: 1, sm: 1, md: 3, lg: 3 }}
          >
            <Text
              pr={{ base: 2, sm: 2, md: 4, lg: 4 }}
              fontWeight='410'
              w={{ base: '82px', sm: '82px', md: '100px', lg: '100px' }}
            >
              <FormattedMessage id='text.to' />
            </Text>
            <MyIcon icon='' />
          </Flex>
          <Flex flex='1' pl={3}>
            <Input
              variant='unstyled'
              h='30px'
              isDisabled
              ref={inputRef}
              overflow={'hidden'}
              placeholder='Mobile,email,or address'
            />
            {/* <Input
              variant='unstyled'
              h='30px'
              isDisabled
              defaultValue={user?.address}
              overflow={'hidden'}
              textOverflow={'ellipsis'}
              placeholder='Mobile,email,or address'
            /> */}
          </Flex>
        </Flex>
      </Flex>
      <Flex mx={9} pt={5}>
        <PrimaryButton
          w='full'
          h='50px'
          //isDisabled={CheckAmount(data.amount).status}
          onClick={onSubmit}
        >
          <FormattedMessage id='text.Continue' />
        </PrimaryButton>
      </Flex>
      <Flex alignItems='center' px={9} py={5} color='#5b616e'>
        <Flex w='full'>
          <Text>
            USDC <FormattedMessage id='text.Balance' />
          </Text>
        </Flex>
        <Flex w='full' textAlign='right'>
          <Text w='full'>
            {formatCoins(res?.balance)} {computeMoney(res?.balance, price.usdc)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
