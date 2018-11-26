import constants from 'src/constants';
const {actionType} = constants;

export const a1Action = {
    a1
};

function a1 ()  {

    return {
        type: actionType.ACTION1,
        data: {}
    }
}
