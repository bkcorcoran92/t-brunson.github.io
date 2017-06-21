(function () {
    var myConnector = tableau.makeConnector();
    // Creating Database Framework 
    myConnector.getSchema = function (schemaCallback) {     
    //defining schemas to place data     
    var userStory_cols = [
        
        { id : "ID", alias : "User Story UUID", dataType : tableau.dataTypeEnum.float },
        
        { id : "FormattedID", alias : "User Story FormattedID", dataType : tableau.dataTypeEnum.string }, 
        
        { id : "PlanEstimate", alias : "User Story Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "Rank", alias : "User Story Rank", dataType : tableau.dataTypeEnum.float },
        
        { id : "ScheduleState", alias : "User Story Schedule State", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationName", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationUUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Tags", alias : "User Story Tags", dataType : tableau.dataTypeEnum.string },
        
        { id : "StoryType", alias : "User Story Type", dataType : tableau.dataTypeEnum.string },
        
        { id : "WorkState", alias : "User Story Work State", dataType : tableau.dataTypeEnum.string },
        
        { id : "AcceptedDate", alias : "User Story Accepted Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "IsTestable", alias : "User Story Testable", dataType : tableau.dataTypeEnum.string },
        
        { id : "FeatureNumber", alias : "User Story Feature Number", dataType : tableau.dataTypeEnum.string },
        
        { id : "FeatureName", alias : "User Story Feature", dataType : tableau.dataTypeEnum.string },

        { id : "OwnerName", alias : "User Story Owner Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "User Story Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectID", alias : "User Story Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ReleaseName", alias : "User Story Release Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ReleaseID", alias : "User Story Release ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Capability", alias : "User Story Capability", dataType : tableau.dataTypeEnum.string },
        
        { id : "RunDate", alias : "User Story Run Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "ObjectID", alias : "User Story ObjectID", dataType : tableau.dataTypeEnum.string },
        
        { id : "DirectChildren", alias : "User Story Children Count", dataType : tableau.dataTypeEnum.string },
        
        { id : "RunProject", alias : "User Story Run Project", dataType : tableau.dataTypeEnum.string },
        
        { id : "Name", alias : "User Story Name", dataType : tableau.dataTypeEnum.string },   
    ];
        
    var userStoryTabel = {
        id : "UserStory",
        alias : "User Story Data",
        columns : userStory_cols
    };

    var project_cols=[
        
        { id : "ID", alias : "ProjectID", dataType : tableau.dataTypeEnum.float },
        
        { id : "Name", alias : "HR Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ObjectID", alias : "HR Project UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Parent_Name", alias : "Parent Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "Parent_ID", alias : "Parent ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Workspace_Name", alias : "Workspace Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "Workspace_ID", alias : "Workspace ID", dataType : tableau.dataTypeEnum.string },
        
        
        
        //{ id : "HR_Project_ref", alias : "User Story ref", dataType : tableau.dataTypeEnum.string },
        
        
        
                    ];
    
    var projectTable ={
        id : "Project",
        alias : "Project Data",
        columns : project_cols
    };
        
    var iteration_cols=[
        
        { id : "ID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.float },
        
        { id : "Name", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "StartDate", alias : "Iteration StartDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "EndDate", alias : "Iteration History End Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "ProjectName", alias : "Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectID", alias : "Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "PlanEstimate", alias : "Iteration Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "PlannedVelocity", alias : "Iteration Planned Velocity", dataType : tableau.dataTypeEnum.float },
        
        { id : "ObjectID", alias : "Iteration Object ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "State", alias : "Iteration State", dataType : tableau.dataTypeEnum.string },
        
        { id : "TaskActualTotal", alias : "Iteration TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "TaskEstimateTotal", alias : "Iteration TaskEstimateTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "TaskRemainingTotal", alias : "Iteration TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "Sequence", alias : "Iteration Sequence", dataType : tableau.dataTypeEnum.float },
       
        
                    ];
    
    var iterationTable ={
        id : "Iteration",
        alias : "Iteration Data",
        columns : iteration_cols
    };
        
    var release_cols=[
        
        { id : "ID", alias : "Release ID", dataType : tableau.dataTypeEnum.float },
        
        { id : "Name", alias : "Release Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ObjectID", alias : "Release Object ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Accepted", alias : "Release Accepted", dataType : tableau.dataTypeEnum.float },
        
        { id : "PlanEstimate", alias : "Release PlanEstimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "PlannedVelocity", alias : "Release Planned Velocity", dataType : tableau.dataTypeEnum.float },
        
        { id : "ProjectName", alias : "Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectID", alias : "Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "EndDate", alias : "Release Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "StartDate", alias : "Release Start Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "State", alias : "Release State", dataType : tableau.dataTypeEnum.string },
        
        { id : "TaskActualTotal", alias : "Release TaskActualTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "TaskEstimateTotal", alias : "Release TaskEstimateTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "TaskRemainingTotal", alias : "Release TaskRemainingTotal", dataType : tableau.dataTypeEnum.float },
        
        { id : "LastUpdated", alias : "Release Last Update", dataType : tableau.dataTypeEnum.date },
        
        
                    ];
    
    var releaseTable ={
        id : "Release",
        alias : "Release Data",
        columns : release_cols
    };
    
    var defect_cols = [
        
        { id : "ID", alias : "Defect ID", dataType : tableau.dataTypeEnum.float },
        
        { id : "FormattedID", alias : "Defect Formatted ID", dataType : tableau.dataTypeEnum.string }, 
        
        { id : "ClosedDate", alias : "Defect Closed Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "CreationDate", alias : "Defect Creation Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "AcceptedDate", alias : "Defect AcceptedDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "PlanEstimate", alias : "Defect Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "Rank", alias : "Defect Rank", dataType : tableau.dataTypeEnum.float },
        
        { id : "ScheduleState", alias : "Defect Schedule State", dataType : tableau.dataTypeEnum.string },
        
        { id : "State", alias : "Defect State", dataType : tableau.dataTypeEnum.string },
        
        { id : "Enviroment", alias : "Defect Enviroment", dataType : tableau.dataTypeEnum.string },
        
        { id : "Priority", alias : "Defect Priority", dataType : tableau.dataTypeEnum.string },
        
        { id : "FoundBy", alias : "Defect Found By", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationName", alias : "Iteration Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationUUID", alias : "Iteration UUID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Owner", alias : "Defect Owner", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Defect Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectID", alias : "Defect Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ReleaseName", alias : "Defect Release Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ReleaseID", alias : "Defect Release ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Tags", alias : "Defect Tag", dataType : tableau.dataTypeEnum.string },
        
        { id : "ObjectID", alias : "Defect ObjectID", dataType : tableau.dataTypeEnum.float },
        
        { id : "Requirement_FormattedID", alias : "FormattedID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Requirement_Iteration", alias : "Itearation", dataType : tableau.dataTypeEnum.string },
        
        { id : "Requirement_IterationID", alias : "Iteration ID", dataType : tableau.dataTypeEnum.string },
       
        { id : "RunDate", alias : "Run Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "RunProject", alias : "Run Project", dataType : tableau.dataTypeEnum.string },
        
        { id : "Severity", alias : "Severity", dataType : tableau.dataTypeEnum.string },    
    ];
        
    var defectTabel = {
        id : "Defect",
        alias : "Defect Data",
        columns : defect_cols
    };
        
    var task_cols=[
        { id : "ID", alias : "Task ID", dataType : tableau.dataTypeEnum.float },
        
        { id : "FormattedID", alias : "Task FormattedID", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationName", alias : "Task Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "IterationID", alias : "Task ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Actuals", alias : "Task Actuals", dataType : tableau.dataTypeEnum.float },
        
        { id : "Estimate", alias : "Task Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "ToDo", alias : "Task ToDo", dataType : tableau.dataTypeEnum.float },
        
        { id : "TimeSpent", alias : "Task Time Spent", dataType : tableau.dataTypeEnum.float },
        
        { id : "State", alias : "Task State", dataType : tableau.dataTypeEnum.float },
        
        { id : "Tags", alias : "Task Tags", dataType : tableau.dataTypeEnum.string },
        
        { id : "TaskType", alias : "Task Task Type", dataType : tableau.dataTypeEnum.string },
        
        { id : "Owner", alias : "Task Owner", dataType : tableau.dataTypeEnum.string },
        
        { id : "Project", alias : "Task Project", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectID", alias : "Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release", alias : "Release Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ReleaseID", alias : "Release ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "WorkProduct_FormattedID", alias : "Task Work Product ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "LastUpdateDate", alias : "Task Last Update", dataType : tableau.dataTypeEnum.date },
        
        { id : "CreationDate", alias : "Task Creation Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "ObjectID", alias : "Task Object ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "RunDate", alias : "Task Run Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "RunProject", alias : "Task Run", dataType : tableau.dataTypeEnum.string },
                    ];
    
    var taskTabel = {
        id : "Task",
        alias : "Task Data",
        columns : task_cols
    };
        
    var portfolioItem_cols=[
        { id : "ID", alias : "Portfolio Item FormattedID", dataType : tableau.dataTypeEnum.float },
        
        { id : "FormattedID", alias : "Portfolio Item FormattedID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ObjectID", alias : "Portfolio Item Object ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "PortfolioItemName", alias : "Portfolio Item Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectName", alias : "Project Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ProjectID", alias : "Project ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentName", alias : "Parent Name", dataType : tableau.dataTypeEnum.string },
        
        { id : "ParentID", alias : "Parent ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "State", alias : "Portfolio Item State", dataType : tableau.dataTypeEnum.string },
        
        { id : "AcceptedLeafStoryCount", alias : "Portfolio Item Accepted Leaf Story Count", dataType : tableau.dataTypeEnum.float },
        
        { id : "AcceptedLeafPlanEstimate", alias : "Portfolio Item Accepted Leaf Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "ActualEndDate", alias : "Portfolio Item Actual End Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "ActualStartDate", alias : "Portfolio Item Actual Start Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "InvestmentCategory", alias : "Portfolio Item Investment Category", dataType : tableau.dataTypeEnum.string },
        
        { id : "JobSize", alias : "Portfolio Item Job Size", dataType : tableau.dataTypeEnum.float },
        
        { id : "LeafStoryCount", alias : "Portfolio Item Leaf Story Count", dataType : tableau.dataTypeEnum.float },
        
        { id : "LeafStoryPlanEstimateTotal", alias : "Portfolio Item Leaf Story Plan Estimate Total ", dataType : tableau.dataTypeEnum.float },
        
        { id : "PercentDoneByStoryCount", alias : "Portfolio Item Percent Done By Stop Count ID", dataType : tableau.dataTypeEnum.float },
        
        { id : "PercentDoneByStoryPlaneEstimate", alias : "Portfolio Item Percent Done By Plan Estimate", dataType : tableau.dataTypeEnum.float },
        
        { id : "PlannedEndDate", alias : "Portfolio Item Planned End Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "PlannedStartDate", alias : "Portfolio Item Planned Start Date", dataType : tableau.dataTypeEnum.date },
        
        { id : "PortfolioItem_Type", alias : "Portfolio Item Type", dataType : tableau.dataTypeEnum.string },
        
        { id : "PerliminaryEstimate", alias : "Portfolio Item Perliminary Estimate", dataType : tableau.dataTypeEnum.string },
        
        { id : "UnEstimatedLeafStoryCount", alias : "Portfolio Item UnEstimated Leaf Story Count", dataType : tableau.dataTypeEnum.string },
        
        { id : "Tags", alias : "Portfolio Item Tags", dataType : tableau.dataTypeEnum.string },
      
        { id : "RefinedEstimate", alias : "Portfolio Item Tags", dataType : tableau.dataTypeEnum.float },
        
        { id : "Description", alias : "Portfolio Item Description", dataType : tableau.dataTypeEnum.string },
        
        { id : "EPMSid", alias : "Portfolio Item EPMSid", dataType : tableau.dataTypeEnum.string },
        
        { id : "Release", alias : "Release", dataType : tableau.dataTypeEnum.string },
        
        { id : "ReleaseID", alias : "Release ID", dataType : tableau.dataTypeEnum.string },
        
        { id : "RunDate", alias : "Portfolio Item RunDate", dataType : tableau.dataTypeEnum.date },
        
        { id : "RunProject", alias : "Portfolio Item Run", dataType : tableau.dataTypeEnum.string },
      ];
    
    var portfolioItemTabel = {
        id : "PortfolioItem",
        alias : "Portfolio Item Data",
        columns : portfolioItem_cols
    };

  schemaCallback([userStoryTabel, iterationTable, projectTable, releaseTable,defectTabel,taskTabel,portfolioItemTabel]);
};
    //Pulling Data From Rally
    myConnector.getData = function(table, doneCallback) {
    
    $.getJSON("http://localhost:3000", function(resp) {
        var feat = resp,
            tableData = []
            i=0;
          // User Story Call   
          if (table.tableInfo.id == "UserStory"){
              for (var i = 0, len = feat.userStory.length; i < len; i++) {
               
              tableData.push({
                    //"HR_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    //"ID": ,
                    "FormattedID": feat.userStory[i].FormattedID,
                    "PlanEstimate": feat.userStory[i].PlanEstimate,
                    "Rank": feat.userStory[i].Rank,
                    "ScheduleState": feat.userStory[i].ScheduleState,
                    "IterationName": feat.userStory[i].Iteration,
                    "IterationUUID": feat.userStory[i].Iteration,
                    "Tags": feat.userStory[i].Tags,
                    //"StoryType": feat[i].ScheduleState,
                    "WorkState": feat.userStory[i].c_WorkState,
                    "AcceptedDate": feat.userStory[i].AcceptedDate,
                    "IsTestable": feat.userStory[i].c_IsTestable,
                    "FeatureNumber": feat.userStory[i].Feature,
                    "FeatureName": feat.userStory[i].Feature,
                    "OwnerName": feat.userStory[i].Owner,
                    "ProjectName": feat.userStory[i].Project._refObjectName,
                    "ProjectID": feat.userStory[i].Project._ref,
                    "ReleaseName": feat.userStory[i].Release,
                    "ReleaseID": feat.userStory[i].Release,
                    "Capability": feat.userStory[i].c_Capability,
                    //"RunDate": feat[i].c_Capability,
                    "ObjectID": feat.userStory[i].ObjectID,
                    "DirectChildren": feat.userStory[i].DirectChildrenCount,
                    //"RunProject": feat[i].DirectChildrenCount,
                    "Name": feat.userStory[i]._refObjectName,
                                });                  
                                               }
              //Error Handeling  
              for (var i = 0, len = feat.userStory.length; i < len; i++){
                        
            if(tableData[i].IterationUUID !== null)
                {
                    tableData[i].IterationName= feat.userStory[i].Iteration._refObjectName;
                                    
                    tableData[i].IterationUUID= feat.userStory[i].Iteration._ObjectID;
                }
            if(tableData[i].FeatureName !== null)  { 
            try{
                
                    tableData[i].FeatureNumber=  feat.userStory[i].Feature.ObjectID;
                                    
                    tableData[i].FeatureName= feat.userStory[i].Feature.Name;
                
            }
            catch(e){
                    tableData[i].FeatureNumber =null;
                
                    tableData[i].FeatureName= null;
            }
            }
                
            if(tableData[i].OwnerName !== null)
                {
                    tableData[i].OwnerName= feat.userStory[i].Owner._refObjectName;           
                }
            if(tableData[i].ReleaseName !== null)
                {
                    tableData[i].ReleaseName=  feat.userStory[i].Release.Name;
                                    
                    tableData[i].ReleaseID= feat.userStory[i].Release.ObjectID;
                }
                
                                                            }             
                                                }
          // Iteration Call  
          if (table.tableInfo.id == "Iteration"){
            for (var i = 0, len = feat.userStory.length; i < len; i++) {
            //Iteration Check
            try{
                tableData.push({
                    //"HR_Iteration_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    "ID":"",
                    "Name": feat.userStory[i].Iteration._refObjectName,
                    "StartDate": feat.userStory[i].Iteration.StartDate,
                    "EndDate": feat.userStory[i].Iteration.EndDate,
                    "ProjectName": feat.userStory[i].Project._refObjectName,
                    "ProjectID": feat.userStory[i].Project._ref,
                    "PlanEstimate": feat.userStory[i].Iteration.PlanEstimate,
                    "PlannedVelocity": feat.userStory[i].Iteration.PlannedVelocity,
                    "ObjectID": feat.userStory[i].Iteration.ObjectID,
                    "State": feat.userStory[i].Iteration.State,
                    "TaskActualTotal": feat.userStory[i].Iteration.TaskActualTotal,
                    "TaskEstimateTotal": feat.userStory[i].Iteration.TaskEstimateTotal,
                    "TaskRemainingTotal": feat.userStory[i].Iteration.TaskRemainingTotal,
                    //"Iteration_Sequence": feat[i].Iteration.State,
                                });
                }
            catch(e){
                    continue;
                    }
                                                            }
                                                }
          // Project Call    
          if (table.tableInfo.id == "Project"){
            for (var i = 0, len = feat.userStory.length; i < len; i++) {
            //Project Check
            try{
                tableData.push({
                   // "HR_Project_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    "ID": '',
                    "Name": feat.userStory[i].Project._refObjectName,
                    "ObjectID": feat.userStory[i].Project._refObjectUUID,
                    "Parent_Name": feat.userStory[i].Parent.Name,
                    "Parent_ID": feat.userStory[i].Parent.ObjectID,
                    "Workspace_Name": feat.userStory[i].Workspace.Name,
                    "Workspace_ID": feat.userStory[i].Workspace.ObjectID,
                    
                                });
                }
            catch(e){
                     tableData.push({
                   // "HR_Project_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ),
                    "ID": '',
                    "Name": feat.userStory[i].Project._refObjectName,
                    "ObjectID": feat.userStory[i].Project._refObjectUUID,
                    "Workspace_Name": feat.userStory[i].Workspace.Name,
                    "Workspace_ID": feat.userStory[i].Workspace.ObjectID,
                    
                                });
                    }
                                                                }
                                                }
          // Release Call 
          if (table.tableInfo.id == "Release"){
            for (var i = 0, len = feat.userStory.length; i < len; i++) {
            //Release Check
            try{
                tableData.push({
                    //"HR_Release_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ), 
                    
                   // "Release_Ref": feat[i].Release._ref,
                    "ID": '',
                    "Name": feat.userStory[i].Release._refObjectName,
                    "ObjectID": feat.userStory[i].Release.ObjectID,
                    "Accepted": feat.userStory[i].Release.Accepted,
                    "PlanEstimate": feat.userStory[i].Release.PlanEstimate,
                    "PlannedVelocity": feat.userStory[i].Release.PlannedVelocity,
                    "ProjectName": feat.userStory[i].Project._refObjectName,
                    "ProjectID": feat.userStory[i].Project._ref,
                    "EndDate": feat.userStory[i].Release.ReleaseDate,
                    "StartDate": feat.userStory[i].Release.ReleaseStartDate,
                    "State": feat.userStory[i].Release.State,
                    "TaskActualTotal": feat.userStory[i].Release.TaskActualTotal,
                    "TaskEstimateTotal": feat.userStory[i].Release.TaskEstimateTotal,
                    "TaskRemainingTotal": feat.userStory[i].Release.TaskRemainingTotal,
                    //"Release_LastUpdated": feat[i].Release.Notes,

                                });
                }
            catch(e){
            continue;
                    }
                                                            }
                                            }
          // Defect Call
          if (table.tableInfo.id == "Defect"){
            for (var i = 0, len = feat.defect.length; i < len; i++) {
            //Defect Check
                tableData.push({
                    //"HR_Release_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ), 
                    "ID": "",
                    "FormattedID": feat.defect[i].FormattedID,
                    "ClosedDate": feat.defect[i].ClosedDate,
                    "CreationDate": feat.defect[i].CreationDate,
                    "AcceptedDate": feat.defect[i].AcceptedDate,
                    "PlanEstimate": feat.defect[i].PlanEstimate,
                    "Rank": feat.defect[i].Rank,
                    "ScheduleState": feat.defect[i].ScheduleState,
                    "State": feat.defect[i].State,
                    "Enviroment": feat.defect[i].Environment,
                    "Priority": feat.defect[i].Priority,
                    "FoundBy": feat.defect[i].c_FoundBy,
                    "IterationName": feat.defect[i].Iteration,
                    "IterationUUID": feat.defect[i].Iteration,
                    "Owner": feat.defect[i].Owner,
                    "ProjectName": feat.defect[i].Project._refObjectName,
                    "ProjectID": feat.defect[i].Project._refObjectUUID,
                    "ReleaseName": feat.defect[i].Release,
                    "ReleaseID": feat.defect[i].Release,
                    "Tags": feat.defect[i].Tags._tagsNameArray,
                    "ObjectID":feat.defect[i].ObjectID,
                    "Requirement_FormattedID": feat.defect[i].Requirement,
                    "Requirement_Iteration": feat.defect[i].Requirement,
                    "Requirement_IterationID": feat.defect[i].Requirement,
                    //"RunDate": feat[i].Release.TaskRemainingTotal,
                    //"RunProject": feat[i].Release.TaskRmainingTotal,
                    "Severity": feat.defect[i].Severity,
                    //"Release_LastUpdated": feat[i].Release.Notes,

                                });
                }                                         
                                            
            //Error Handling  
            for (var i = 0, len = feat.defect.length; i < len; i++){
                        
            if(tableData[i].IterationUUID !== null)
                {
                    tableData[i].IterationName= feat.defect[i].Iteration.Name;
                                    
                    tableData[i].IterationUUID= feat.defect[i].Iteration.ObjectID;
                }
            if(tableData[i].Owner !== null)
                {
                    tableData[i].Owner= feat.defect[i].Owner._refObjectName;           
                }
            if(tableData[i].ReleaseName !== null)
                {
                    tableData[i].ReleaseName=  feat.defect[i].Release.Name;
                                    
                    tableData[i].ReleaseID= feat.defect[i].Release.ObjectID;
                }
            if(tableData[i].Requirement_FormattedID !== null)
                {
                    try{
                    tableData[i].Requirement_FormattedID= feat.defect[i].Requirement.FormattedID;
                    }
                    catch(e){
                        tableData[i].Requirement_FormattedID='';
                    }   
                }
             if(tableData[i].Requirement_Iteration !== null)
                {
                    try{
                     tableData[i].Requirement_Iteration= feat.defect[i].Requirement.Iteration.Name;
                                    
                    tableData[i].Requirement_IterationID= feat.defect[i].Requirement.Iteration.ObjectID;
                }
                    catch(e){
                        tableData[i].Requirement_Iteration= null;
                                    
                    tableData[i].Requirement_IterationID= null;
                    }
                                                            }
         
            
                                                            }
          }
          // Task Call 
          if (table.tableInfo.id == "Task"){
            for (var i = 0, len = feat.task.length; i < len; i++) {
            //Release Check
                tableData.push({
                    //"HR_Release_ref": feat[i]._ref.substring(feat[i]._ref.lastIndexOf("/")+1, feat[i]._ref.length ), 
                    "ID": '',
                    "FormattedID": feat.task[i].FormattedID,
                    "IterationName": feat.task[i].Iteration,
                    "IterationID": feat.task[i].Iteration,
                    "Actuals": feat.task[i].Actuals,
                    "Estimate": feat.task[i].Estimate,
                    "ToDo": feat.task[i].ToDo,
                    "TimeSpent": feat.task[i].TimeSpent,
                    "StartDate": feat.task[i].ReleaseStartDate,
                    "State": feat.task[i].State,
                    "Tags": feat.task[i].Tags._tagsNameArray,
                    "TaskType": feat.task[i].c_Type,
                    "Owner": feat.task[i].Owner,
                    "Project": feat.task[i].Project,
                    "ProjectID": feat.task[i].Project,
                    "Release": feat.task[i].Release,
                    "ReleaseID": feat.task[i].Release,
                    "WorkProduct_FormattedID": feat.task[i].WorkProduct.FormattedID,
                    "LastUpdateDate": feat.task[i].LastUpdateDate,
                    "CreationDate": feat.task[i].CreationDate,
                    "ObjectID": feat.task[i].ObjectID,
                    //"RunDate": '',
                    //"RunProject":'',
                                });
                                                            }
            for (var i = 0, len = feat.task.length; i < len; i++){
                        
            if(tableData[i].IterationName !== null)
                {
                    tableData[i].IterationName= feat.task[i].Iteration.Name;
                                    
                    tableData[i].IterationID= feat.task[i].Iteration.ObjectID;
                }
            if(tableData[i].Owner !== null)
                {
                    tableData[i].Owner= feat.task[i].Owner._refObjectName;           
                }
            if(tableData[i].Release !== null)
                {
                    tableData[i].Release=  feat.task[i].Release.Name;
                                    
                    tableData[i].ReleaseID= feat.task[i].Release.ObjectID;
                }
            if(tableData[i].Project !== null)
                {
                    tableData[i].Project= feat.task[i].Project._refObjectName;
                    
                    tableData[i].ProjectID= feat.task[i].Project._ref;
                }
          
                                            }
                                            }
          // PortfolioItem Call
          if (table.tableInfo.id == "PortfolioItem"){
            for (var i = 0, len = feat.portfolioItem.length; i < len; i++) {
            //PortfolioItem Check
                tableData.push({
                    "ID": '',
                    "FormattedID": feat.portfolioItem[i].FormattedID,
                    "ObjectID": feat.portfolioItem[i].ObjectID,
                    "PortfolioItemName": feat.portfolioItem[i].Name,
                    "ProjectName": feat.portfolioItem[i].Project,
                    "ProjectID": feat.portfolioItem[i].Project,
                    "ParentName": feat.portfolioItem[i].PortfolioItemType.Parent,
                    "ParentID": feat.portfolioItem[i].PortfolioItemType.Parent,
                    "State": feat.portfolioItem[i].State,
                    "AcceptedLeafStoryCount": feat.portfolioItem[i].AcceptedLeafStoryCount,
                    "AcceptedLeafPlanEstimate": feat.portfolioItem[i].AcceptedLeafStoryPlanEstimateTotal,
                    "ActualEndDate": feat.portfolioItem[i].ActualEndDate,
                    "ActualStartDate": feat.portfolioItem[i].ActualStartDate,
                    "InvestmentCategory": feat.portfolioItem[i].InvestmentCategory,
                    "JobSize": feat.portfolioItem[i].JobSize,
                    "LeafStoryCount": feat.portfolioItem[i].LeafStoryCount,
                    "LeafStoryPlanEstimateTotal": feat.portfolioItem[i].LeafStoryPlanEstimateTotal,
                    "PercentDoneByStoryCount": feat.portfolioItem[i].PercentDoneByStoryCount,
                    "PercentDoneByStoryPlaneEstimate": feat.portfolioItem[i].PercentDoneByStoryPlanEstimate,
                    "PlannedEndDate": feat.portfolioItem[i].PlannedEndDate,
                    "PlannedStartDate": feat.portfolioItem[i].PlannedStartDate,
                    "PortfolioItem_Type": feat.portfolioItem[i].PortfolioItemType.Name,
                    "PerliminaryEstimate": feat.portfolioItem[i].PreliminaryEstimate,
                    "UnEstimatedLeafStoryCount": feat.portfolioItem[i].UnEstimatedLeafStoryCount,
                    "Tags": feat.portfolioItem[i].Tags._tagsNameArray,
                    "RefinedEstimate": feat.portfolioItem[i].RefinedEstimate,
                    "Description": feat.portfolioItem[i].Description,
                    "EPMSid": feat.portfolioItem[i].c_EPMSID,
                    "Release": feat.portfolioItem[i].Release,
                    "ReleaseID": feat.portfolioItem[i].Release,
                    //"RunDate": '',
                    //"RunProject":'',
                              });
                                                                }                                               
            for (var i = 0, len = feat.portfolioItem.length; i < len; i++){
                        
            if(tableData[i].ProjectName !== null)
                {
                    tableData[i].ProjectName= feat.portfolioItem[i].Project._refObjectName;
                                    
                    tableData[i].ProjectID= feat.portfolioItem[i].Project._ref;
                }
            if(tableData[i].Release !== null)
                {
                    tableData[i].Release=  feat.portfolioItem[i].Release.Name;
                                    
                    tableData[i].ReleaseID= feat.portfolioItem[i].Release.ObjectID;
                }
            if(tableData[i].ParentName !== null)
                {
                    tableData[i].ParentName= feat.portfolioItem[i].PortfolioItemType.Parent.Name;
                    
                    tableData[i].ParentID= feat.portfolioItem[i].PortfolioItemType.Parent.ObjectID;
                }
          
                                                                }
                                            }
        table.appendRows(tableData);
        doneCallback();
    });
};
    //Sending to tableau
    tableau.registerConnector(myConnector);
    $(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "Rally Data Import";
        tableau.submit();
    });
});
})();