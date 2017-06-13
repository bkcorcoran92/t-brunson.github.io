(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        //defining schema to place data
        
    var object_cols = [
        { id : "HR_ref", alias : "ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_UUID", alias : "UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Name", alias : "Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_CreationDate", alias : "CreationDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "HR_ObjectID", alias : "ObjectID", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Description", alias : "Description", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_DisplayColor", alias : "DisplayColor", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Expedite", alias : "Expedite", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_FormattedID", alias : "FormattedID", dataType : tableau.dataTypeEnum.string }, 
        
        { id : "HR_LastUpdateDate", alias : "LastUpdateDate", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Name", alias : "Object Name", dataType : tableau.dataTypeEnum.string },
    
        { id : "HR_Notes", alias : "Notes", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Owner", alias : "Owner", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Ready", alias : "Ready", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_ScheduleState", alias : "ScheduleState", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_AcceptedDate", alias : "AcceptedDate", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Blocked", alias : "Blocked", dataType : tableau.dataTypeEnum.float},
        
        { id : "HR_BlockedReason", alias : "BlockedReason", dataType : tableau.dataTypeEnum.float }, 
        
        { id : "HR_Blocker", alias : "Blocker", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_HasParent", alias : "HasParent", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_InProgressDate", alias : "InProgressDate", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Parent", alias : "Parent", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_PlanEstimate", alias : "PlanEstimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Rank", alias : "Rank", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Release", alias : "Release", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TaskActualTotal", alias : "TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TaskEstimateTotal", alias : "TaskEstimateTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TaskStatus", alias : "TaskStatus", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TaskRemainingTotal", alias : "TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TestCaseStatus", alias : "TestCaseStatus", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_c_AcceptanceCriteria", alias : "c_AcceptanceCriteria", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_c_IsTestable", alias : "IsTestable", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_c_Parity", alias : "c_Parity", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Errors", alias : "Errors", dataType : tableau.dataTypeEnum.float },
        
                        ];
        
    var objectTable = {
        id : "RallyObjectData",
        alias : "Object Data",
        columns :  object_cols
    };
        //iteration data
        
    var iteration_cols =[
        { id : "IterationName", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationUUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "StartDate", alias : "Iteation Start Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "EndDate", alias : "Iteation End Date", dataType : tableau.dataTypeEnum.string },
                
        { id : "PlanEstimate", alias : "Iteration Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "State", alias : "Iteration State", dataType : tableau.dataTypeEnum.string },
        
        { id : "PlannedVelocity", alias : "Iteration PlannedVelocity", dataType : tableau.dataTypeEnum.string },
        
        { id : "TaskActualTotal", alias : "Iteration TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "TaskEstimateTotal", alias : "Iteration TaskEstimateTotal", dataType : tableau.dataTypeEnum.float},
        
        { id : "TaskRemainingTotal", alias : "Iteration TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "UserIterationCapacities", alias : "Iteration UserIterationCapacities", dataType : tableau.dataTypeEnum.string }
        
        
        
        
                        ];
        
    var iteratoinTable = {
        id : "RallyIterationData",
        alias : "Iteratoin Data",
        columns :  iteration_cols
    };

    var project_cols=[
        { id : "ProjectUUID", alias : "Iteation's Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Iteation's Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Iteation's Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentName", alias : "Iteation's Parent Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentUUID", alias : "Iteation's Project UUID", dataType : tableau.dataTypeEnum.string }
                    ];
    
    var projectTable ={
        id : "ProjectData",
        alias : "Project Data",
        columns : project_cols
    };
    
    
    

    schemaCallback([objectTable, iteratoinTable, projectTable]);
};

    myConnector.getData = function(table, doneCallback) {
    
    $.getJSON("http://localhost:3000", function(resp) {
        var feat = resp,
            tableData = [];

        // Iterate over the JSON object
        for (var i = 0, len = feat.length; i < len; i++) {
            if (feat[i].Iteration == null){
                
                     tableData.push({
                "ObjectName": feat[i]._refObjectName,
                
                                    })
                                            }
            
             if (feat[i].Iteration !== null){
            tableData.push({
               //object calls
                "HR_ref": feat[i]._ref,
                "HR_UUID": feat[i]._refObjectUUID,
                "HR_Name": feat[i]._refObjectName,
                "HR_CreationDate": feat[i].CreationDate,
                "HR_ObjectID": feat[i].ObjectID,
                "HR_Description": feat[i].Description,
                "HR_DisplayColor": feat[i].DisplayColor,
                "HR_Expedite": feat[i].Expedite,
                "HR_FormattedID": feat[i].FormattedID,
                "HR_LastUpdateDate": feat[i].LastUpdateDate,
                "HR_Name": feat[i].Name,
                "HR_Notes": feat[i].Notes,
                "HR_Owner": feat[i].Owner,
                "HR_Ready": feat[i].Ready,
                "HR_ScheduleState": feat[i].ScheduleState,
                "HR_AcceptedDate": feat[i].AcceptedDate,
                "HR_Blocked": feat[i].Blocked,
                "HR_BlockedReason": feat[i].BlockedReason,
                "HR_Blocker": feat[i].Blocker,
                "HR_HasParent": feat[i].HasParent,
                "HR_InProgressDate": feat[i].InProgressDate,
                "HR_Parent": feat[i].Parent,
                "HR_PlanEstimate": feat[i].PlanEstimate,
                "HR_Rank": feat[i].Rank,
                "HR_Release": feat[i].Release,
                "HR_TaskActualTotal": feat[i].TaskActualTotal,
                "HR_TaskEstimateTotal": feat[i].TaskEstimateTotal,
                "HR_TaskRemainingTotal": feat[i].TaskRemainingTotal,
                "HR_TaskStatus": feat[i].TaskStatus,
                "HR_TestCaseStatus": feat[i].TestCaseStatus,
                "HR_c_AcceptanceCriteria": feat[i].c_AcceptanceCriteria,
                "HR_c_IsTestable": feat[i].c_IsTestable,
                "HR_c_Parity": feat[i].c_Parity,
                "HR_Errors": feat[i].Errors,
                
               /* //Iteration calls
                "IterationName": feat[i].Iteration._refObjectName,
                "IterationUUID": feat[i].Iteration._refObjectUUID,
                "StartDate": feat[i].Iteration.StartDate,
                "EndDate": feat[i].Iteration.EndDate,
                "PlannedVelocity": feat[i].Iteration.PlannedVelocity,
                "TaskActualTotal": feat[i].Iteration.TaskActualTotal,
                "TaskEstimateTotal": feat[i].Iteration.TaskEstimateTotal,
                "TaskRemainingTotal": feat[i].Iteration.TaskRemainingTotal,
                "PlanEstimate": feat[i].Iteration.PlanEstimate,
                "UserIterationCapacities": feat[i].Iteration.UserIterationCapacities.Count,
                "State": feat[i].Iteration.State,
                
                
                
                
                
                //project calls
                "ProjectUUID": feat[i].Project._refObjectUUID,
                "ProjectName": feat[i].Project._refObjectName,
                "ParentName": feat[i].Iteration.Project.Parent._refObjectName,
                "ParentUUID": feat[i].Iteration.Project.Parent._refObjectUUID
            */
            })
                                            }
                                                        }
            

        table.appendRows(tableData);
        doneCallback();
    });
};

    tableau.registerConnector(myConnector);
    $(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Rally Data Import";
        tableau.submit();
    });
});
})();