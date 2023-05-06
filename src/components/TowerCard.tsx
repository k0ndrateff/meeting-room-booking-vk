import React from "react";
import {Box} from "@chakra-ui/react";

type TowerCardProps = {
    children: string;
    tower: string;
    select: (tower: string) => void;
    isSelected?: boolean;
    mr?: number;
};

const TowerCard:React.FC<TowerCardProps> = ({children, isSelected, select, tower, mr}) => {
    return (
        <Box p={4}
             mr={mr ?? 0}
             border={ isSelected ? 'solid black 2px' : 'solid lightGray 2px'}
             borderRadius={'15px'}
             w={'100%'}
             cursor={'pointer'}
             onClick={() => select(tower)}
             _hover={!isSelected ? {border: 'solid gray 2px'} : {border: 'solid black 2px'}}
        >
            <h3 style={{textAlign: 'center'}}>{children}</h3>
        </Box>
    );
};
export default TowerCard;