import Constants from "../../helpers/Constants";
import K from '../../assests/images/K.svg'
import Deye from '../../assests/images/Deye 3.svg';
import DJ from '../../assests/images/DJ 2.svg';
import Growatt from '../../assests/images/Growwat 3.svg';
import Must from '../../assests/images/MUST 4.svg';
import Lumi from '../../assests/images/Lumi 5.svg';
import Rocket from '../../assests/images/ROCKET 5.svg';
import Solar from '../../assests/images/FELICITY 5.svg';
import SuperPower from '../../assests/images/SUPERPOWER 2.svg';
import Rambo from '../../assests/images/RAMBO 2.svg';
import Inkel from '../../assests/images/INKEL 3.svg';
import Exide from '../../assests/images/Exide 3.svg';
import Tuffball from '../../assests/images/TUFFBULL 3.svg';
import P1 from '../../assests/images/p1.svg';
import P2 from '../../assests/images/p2.svg';
import P3 from '../../assests/images/p3.svg';
import P4 from '../../assests/images/p4.svg';
import P5 from '../../assests/images/p5.svg';
import P6 from '../../assests/images/p6.svg';
import P7 from '../../assests/images/p7.svg';
import P9 from '../../assests/images/p9.svg';
import P8 from '../../assests/images/p8.svg';

import CustomSwitchButton from "../Common/CustomSwitchButton/CustomSwitchButton";
import CustomCheckList from "../Common/CustomChecklist/CustomCheckList";


export const issueType = [
    Constants.urgent,
    Constants.typical
];

export const issuesDepartment = [
    Constants.administrative,
    Constants.finance,
    Constants.accounting,
    Constants.sales,
    Constants.marketing,
    Constants.logistic,
    Constants.humanResources,
    Constants.supplier,
    Constants.security
];

export const whichCheckListLogos = [
    K, Deye, DJ, Growatt, Must, Lumi, Rocket,
    Solar, SuperPower, Rambo, Inkel, Exide, Tuffball
]

export const directWhomCheckList = [
    P1, P2, P3, P4, P5, P6, P7,
    P8, P9,
];

export const btns = [
    Constants.delete,
    Constants.save,
    Constants.submit,
]

export const screenItems = [
    {
        title: Constants.issue.toUpperCase(),
        type: 'switchButton',
        items: issueType,
    },
    {
        title: Constants.relatingDep,
        type: 'switchButton',
        items: issuesDepartment,
    },
    {
        title: Constants.relatingWhich,
        type: 'checkList',
        items: whichCheckListLogos,
        checkListType: 'logo',
    },
    {
        title: Constants.directWhom,
        type: 'checkList',
        items: directWhomCheckList,
        checkListType: 'profilePic',
    },
];

export const textFields = [
    {
        label: Constants.issue,
        isMultiline: true,
        name: 'issue',
    },
    {
        label: Constants.choices,
        name: 'choices1',
    },
    {
        label: Constants.choices,
        name: 'choices2',
    },
    {
        label: Constants.choices,
        name: 'choices3',
    },
    {
        label: Constants.note,
        name: 'note',
    }
];

export const renderItems = (items, type, checkListType) => {
    switch (type) {
        case 'switchButton':
            return (
                <CustomSwitchButton btnsDescriptions={items} />
            )
        case 'checkList':
            return (
                <CustomCheckList images={items} type={checkListType} />
            )
        default:
            return <div>default</div>
    }
}