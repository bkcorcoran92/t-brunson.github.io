(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        //defining schema to place data
        
    var hierarchicalrequirement_cols = [
        //{ id : "HR_ref", alias : "User Story ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_UUID", alias : "User StoryUUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Name", alias : "User Story Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_CreationDate", alias : "User Story CreationDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "HR_ObjectID", alias : "User Story ObjectID", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Description", alias : "User Story Description", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_DisplayColor", alias : "User Story DisplayColor", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Expedite", alias : "User Story Expedite", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_FormattedID", alias : "User StoryFormattedID", dataType : tableau.dataTypeEnum.string }, 
        
        { id : "HR_LastUpdateDate", alias : "User Story LastUpdateDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "HR_Name", alias : "User Story Object Name", dataType : tableau.dataTypeEnum.string },
    
        { id : "HR_Notes", alias : "User Story Notes", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Ready", alias : "User Story Ready", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_ScheduleState", alias : "User Story ScheduleState", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_AcceptedDate", alias : "User Story AcceptedDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "HR_Blocked", alias : "User Story Blocked", dataType : tableau.dataTypeEnum.string},
        
        { id : "HR_BlockedReason", alias : "User Story BlockedReason", dataType : tableau.dataTypeEnum.string}, 
        
        { id : "HR_Blocker", alias : "User Story Blocker", dataType : tableau.dataTypeEnum.string},
        
        { id : "HR_HasParent", alias : "User Story HasParent", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_InProgressDate", alias : "User Story InProgressDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "HR_Parent", alias : "User Story Parent", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_PlanEstimate", alias : "User Story PlanEstimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Rank", alias : "Rank", dataType : tableau.dataTypeEnum.float },

        { id : "HR_TaskActualTotal", alias : "User Story TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TaskEstimateTotal", alias : "User Story TaskEstimateTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TaskStatus", alias : "User Story TaskStatus", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_TaskRemainingTotal", alias : "User Story TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_TestCaseStatus", alias : "User Story TestCaseStatus", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_c_AcceptanceCriteria", alias : "User Story c_AcceptanceCriteria", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_c_IsTestable", alias : "User Story IsTestable", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_c_Parity", alias : "User Story c_Parity", dataType : tableau.dataTypeEnum.string },
        
                        ];
        
    var hierarchicalrequirementTabel = {
        id : "hierarchicalRequirementData",
        alias : "User Story",
        columns :  hierarchicalrequirement_cols
    };

    var project_cols=[
        
        { id : "ProjectRef", alias : "HR Project ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectUUID", alias : "HR Project UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "HR Project Name", dataType : tableau.dataTypeEnum.string },
        
        //{ id : "HR_Project_ref", alias : "User Story ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Project_UUID", alias : "User Story UUID", dataType : tableau.dataTypeEnum.string },
        
                    ];
    
    var projectTable ={
        id : "ProjectData",
        alias : "Project Data",
        columns : project_cols
    };
        
    var owner_cols=[
        { id : "OwnerRef", alias : "HR Owner ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "OwnerUUID", alias : "HR Owner UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "OwnerName", alias : "HR Owner Name", dataType : tableau.dataTypeEnum.string },
        
        //{ id : "HR_Owner_ref", alias : "User Story Ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Owner_UUID", alias : "User Story UUID", dataType : tableau.dataTypeEnum.string },
        
                    ];
    
    var ownerTable ={
        id : "OwnerData",
        alias : "Owner Data",
        columns : owner_cols
    };
    
    var Iteration_cols=[
       // { id : "Iteration_Ref", alias : "Iteration ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_UUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_Name", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_CreationDate", alias : "Iteration History Creation Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_CreatedAt", alias : "Iteration Created At", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_ObjectID", alias : "Iteration Object ID", dataType : tableau.dataTypeEnum.float },
        
        { id : "Iteration_ObjectID", alias : "Iteration Object ID", dataType : tableau.dataTypeEnum.float },
        
       // { id : "Iteration_StartDate", alias : "Iteration StartDate", dataType : tableau.dataTypeEnum.string },
        
       // { id : "Iteration_EndDate", alias : "Iteration History End Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_Notes", alias : "Iteration Notes", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_PlanEstimate", alias : "Iteration PlanEstimate", dataType : tableau.dataTypeEnum.float },
        
       // { id : "Iteration_PlannedVelocity", alias : "Iteration PlanEstimate", dataType : tableau.dataTypeEnum.float },
        
       // { id : "Iteration_State", alias : "Iteration State", dataType : tableau.dataTypeEnum.string },
        
        { id : "Iteration_TaskActualTotal", alias : "Iteration TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "Iteration_TaskEstimateTotal", alias : "Iteration TaskEstimateTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "Iteration_TaskRemainingTotal", alias : "Iteration TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Iteration_ref", alias : "User Story Ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Iteration_UUID", alias : "User Story UUID", dataType : tableau.dataTypeEnum.string },
        
                    ];
    
    var IterationTable ={
        id : "IterationData",
        alias : "Iteration Data",
        columns : Iteration_cols
    };
        
    var Release_cols=[
        //{ id : "Release_Ref", alias : "Release ref", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release_UUID", alias : "Release UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release_Name", alias : "Release Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release_CreationDate", alias : "Release Creation Date", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release_CreatedAt", alias : "Release Created At", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release_ObjectID", alias : "Release Object ID", dataType : tableau.dataTypeEnum.float },
        
        { id : "Release_Notes", alias : "Release Notes", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release_PlanEstimate", alias : "Release PlanEstimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "Release_TaskActualTotal", alias : "Release TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "Release_TaskEstimateTotal", alias : "Release TaskEstimateTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "Release_TaskRemainingTotal", alias : "Release TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "HR_Release_ref", alias : "Release", dataType : tableau.dataTypeEnum.string },
        
        { id : "HR_Release_UUID", alias : "Release", dataType : tableau.dataTypeEnum.string },
        
                    ];
    
    var ReleaseTable ={
        id : "ReleaseData",
        alias : "Release Data",
        columns : Release_cols
    };

  schemaCallback([hierarchicalrequirementTabel, ownerTable, IterationTable, projectTable, ReleaseTable]);
};

    myConnector.getData = function(table, doneCallback) {
    
    $.getJSON("http://localhost:3000", function(resp) {
        var feat = resp,
            tableData = [];
        var i=0;
        // Iterate over the JSON object
               
          if (table.tableInfo.id == "hierarchicalRequirementData"){
              for (var i = 0, len = feat.length; i < len; i++) {
                  try{
              tableData.push({
                    //"HR_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
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
                    "HR_Ready": feat[i].Ready,
                    "HR_ScheduleState": feat[i].ScheduleState,
                    "HR_AcceptedDate": feat[i].AcceptedDate,
                    "HR_Blocked": feat[i].Blocked,
                    "HR_BlockedReason": feat[i].BlockedReason,
                    "HR_Blocker": feat[i].Blocker,
                    "HR_HasParent": feat[i].HasParent,
                    "HR_InProgressDate": feat[i].InProgressDate,
                    "HR_Parent": feat[i].Parent._refObjectUUID,
                    "HR_PlanEstimate": feat[i].PlanEstimate,
                    "HR_Rank": feat[i].Rank,
                    "HR_TaskActualTotal": feat[i].TaskActualTotal,
                    "HR_TaskEstimateTotal": feat[i].TaskEstimateTotal,
                    "HR_TaskRemainingTotal": feat[i].TaskRemainingTotal,
                    "HR_TaskStatus": feat[i].TaskStatus,
                    "HR_TestCaseStatus": feat[i].TestCaseStatus,
                    "HR_c_AcceptanceCriteria": feat[i].c_AcceptanceCriteria,
                    "HR_c_IsTestable": feat[i].c_IsTestable,
                    "HR_c_Parity": feat[i].c_Parity,
                                });
                  }
                  
                catch(e) {
                    tableData.push({
                    //"HR_ref":feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
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
                    "HR_TaskActualTotal": feat[i].TaskActualTotal,
                    "HR_TaskEstimateTotal": feat[i].TaskEstimateTotal,
                    "HR_TaskRemainingTotal": feat[i].TaskRemainingTotal,
                    "HR_TaskStatus": feat[i].TaskStatus,
                    "HR_TestCaseStatus": feat[i].TestCaseStatus,
                    "HR_c_AcceptanceCriteria": feat[i].c_AcceptanceCriteria,
                    "HR_c_IsTestable": feat[i].c_IsTestable,
                    "HR_c_Parity": feat[i].c_Parity,
                        
                    });
                }
                    
              }
                                                                    }
          
            
          if (table.tableInfo.id == "OwnerData"){
            //Owner Check
            for (var i = 0, len = feat.length; i < len; i++) {
                
            try{
                tableData.push({
                   // "HR_Owner_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    "HR_Owner_UUID": feat[i]._refObjectUUID,
                    "OwnerRef": feat[i].Owner._ref,
                    "OwnerUUID": feat[i].Owner._refObjectUUID,
                    "OwnerName": feat[i].Owner._refObjectName,
                                });
            }
                catch(e){
                    continue;
                }
                
                                                    }
          }
            
          if (table.tableInfo.id == "IterationData"){
            for (var i = 0, len = feat.length; i < len; i++) {
            //Iteration Check
            try{
                tableData.push({
                    //"HR_Iteration_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    "HR_Iteration_UUID": feat[i]._refObjectUUID,
                    "Iteration_Ref": feat[i].Iteration._ref,
                    "Iteration_UUID": feat[i].Iteration._refObjectUUID,
                    "Iteration_Name": feat[i].Iteration._refObjectName,
                    "Iteration_CreationDate": feat[i].Iteration.CreationDate,
                    "Iteration_CreatedAt": feat[i].Iteration._CreatedAt,
                    "Iteration_ObjectID": feat[i].Iteration.ObjectID,
                    "Iteration_StartDate": feat[i].Iteration.StartDate,
                    "Iteration_EndDate": feat[i].Iteration.EndDate,
                    "Iteration_Notes": feat[i].Iteration.Notes,
                    "Iteration_ObjectID": feat[i].Iteration.ObjectID,
                    "Iteration_PlanEstimate": feat[i].Iteration.PlanEstimate,
                 // "Iteration_PlannedVelocity": feat[i].Iteration.PlannedVelocity,
                 // "Iteration_State": feat[i].Iteration.State,
                    "Iteration_TaskActualTotal": feat[i].Iteration.TaskActualTotal,
                    "Iteration_TaskEstimateTotal": feat[i].Iteration.TaskEstimateTotal,
                    "Iteration_TaskRemainingTotal": feat[i].Iteration.TaskRemainingTotal,
                                });
                }
                catch(e){
                    continue;
                }
                                                    }
          }
            
          if (table.tableInfo.id == "ProjectData"){
            for (var i = 0, len = feat.length; i < len; i++) {
            //Project Check
            try{
                tableData.push({
                   // "HR_Project_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    "HR_Project_UUID": feat[i]._refObjectUUID,
                    "ProjectRef": feat[i].Project._ref,
                    "ProjectUUID": feat[i].Project._refObjectUUID,
                    "ProjectName": feat[i].Project._refObjectName,
                                });
                }
                catch(e){
                    continue;
                }
                                                    }
          }
        
          if (table.tableInfo.id == "ReleaseData"){
            for (var i = 0, len = feat.length; i < len; i++) {
            //Release Check
            try{
                tableData.push({
                    //"HR_Release_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ), 
                    "HR_Release_UUID": feat[i]._refObjectUUID,
                    "Release_Ref": feat[i].Release._ref,
                    "Release_UUID": feat[i].Release._refObjectUUID,
                    "Release_Name": feat[i].Release._refObjectName,
                    "Release_CreationDate": feat[i].Release.CreationDate,
                    "Release_CreatedAt": feat[i].Release._CreatedAt,
                    "Release_ObjectID": feat[i].Release.ObjectID,
                    "Release_Notes": feat[i].Release.Notes,
                    "Release_ObjectID": feat[i].Release.ObjectID,
                    "Release_PlanEstimate": feat[i].Release.PlanEstimate,
                    "Release_TaskActualTotal": feat[i].Release.TaskActualTotal,
                    "Release_TaskEstimateTotal": feat[i].Release.TaskEstimateTotal,
                    "Release_TaskRemainingTotal": feat[i].Release.TaskRemainingTotal,
                                });
                }
                catch(e){
                    continue;
                }
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