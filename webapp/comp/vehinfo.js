sap.ui.define([
    "sap/ui/core/XMLComposite"
], function(XMLComposite){
    "use strict";
return XMLComposite.extend("sap.ui5.InsuranceAgent.Insagentwithodata.comp.vehinfo",{
    metadata:{
        properties:{
            "ChasisNumber":{
                type:"string"
            },
            "VehType":{
                type:"string"
            },
            "FuelType":{
                type:"string"
            }
        },
        events:{
            submit:{
                parameters:{
                    FuelType:{
                        type:"string"
                    }
                }
            }
        }
    },

    _submitPressed: function(){
        this.fireSubmit({FuelType: this.getFuelType()});
    }
});
});