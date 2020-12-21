

const initialState = {jsonData:[{
    "blocks": "Triggers",
    "id": "triggers",
    "blockText": [
        {
            "blockId": 1,
            "imgSrc": "eye",
            "blockTitle": "New visitor",
            "blockDesc": "Triggers when somebody visits a specified page",
            "dropBlockDetails": {
                "dropImg":"eyeblue",
                "blockyname":"New visitor",
                "blockyright":"more",
                "blockyinfo":"When a <span>new visitor</span> goes to <span>Site 1</span>"

            }
        },
        {
            "blockId": 2,
            "imgSrc": "action",
            "blockTitle": "Action is performed",
            "blockDesc": "Triggers when somebody performs a specified action",
            "dropBlockDetails": {
                "dropImg":"actionblue",
                "blockyname":"Action is performed",
                "blockyright":"more",
                "blockyinfo":"When <span>Action 1</span> is performed"

            }
        },
        {
            "blockId": 3,
            "imgSrc": "time",
            "blockTitle": "Time has passed",
            "blockDesc": "Triggers after a specified amount of time",
            "dropBlockDetails": {
                "dropImg":"timeblue",
                "blockyname":"Time has passed",
                "blockyright":"more",
                "blockyinfo":"When <span>10 seconds</span> have passed"

            }
        },
        {
            "blockId": 4,
            "imgSrc": "error",
            "blockTitle": "Error prompt",
            "blockDesc": "Triggers when a specified error happens",
            "dropBlockDetails": {
                "dropImg":"errorblue",
                "blockyname":"Error prompt",
                "blockyright":"more",
                "blockyinfo":"When <span>Error 1</span> is triggered"

            }
        }
    ]
}]};

export const flowyReducer=(state =initialState, action) => {

    switch (action.type) {
     
        case "FLOWY_DATA_LOADED":
            return {
                ...state,
                jsonData:action.payload
            };
    
        default:
            return state;
    }
    
};