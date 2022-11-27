import React from 'react'
import { Text } from '@chakra-ui/react';
import Moment from 'moment';

export function FormatDate({ date }) {
    const formatDate = Moment(date).format('DD-MM-YYYY')
    return (
        <Text >
            {formatDate}
        </Text>
    )
}
