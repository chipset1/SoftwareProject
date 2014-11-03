var MODULE = MODULE || {};

// http://wenzhixin.net.cn/p/bootstrap-table/docs/documentation.html
// http://wenzhixin.net.cn/p/bootstrap-table/docs/examples.html
MODULE.createCourseTable = function(){
	$('#course-table-javascript').bootstrapTable({
        // height: 600,
        // pageSize: 7,
        // striped : true,
        clickToSelect: true,
        columns: [
        {
            field: 'state',
            checkbox: true
        },
        {
            field: 'courseCode',
            title: 'Code',
            align: 'center',
            valign: 'middle',
            sortable: true,
            clickToSelect: false,
        },
        {
            field: 'courseName',
            title: 'Name',
            align: 'center',
            valign: 'middle',
            // sortable: true,
        },
        {
            field: 'courseLevel',
            title: 'Level',
            align: 'center',
            valign: 'middle',
            // sortable: true,
        }
        ]
    });		
}

MODULE.createStudentTable = function(){
    $('#student-table-javascript').bootstrapTable({
        search: true,
        onClickRow: function(row, element){
            // element[0].bgColor = '#AED4E9';
        },
        columns: [
        {
            //field: 'studentName',//for fat table
			field: 'student_name',
            title: 'Name',
            align: 'center',
            valign: 'middle',
            sortable: true,
        },
        {
            //field: 'studentNumber',//for fat table
			field: 'student_no',
            title: 'Number',
            align: 'center',
            valign: 'middle',
            sortable: true,
        }
        ]
    });
}

MODULE.createPlanHistoryTable = function(){
    $('#history-table').bootstrapTable({
        // pageSize: 7,
        striped : true,
        // pagination: true,
        // clickToSelect: true,
        columns: [
        {
            field: 'course_no',
            title: 'Course Number',
            align: 'center',
            valign: 'middle',
            sortable: true
        },
        {
            width: 1,
            field: 'student_no',
            title: 'Student Number',
            align: 'center',
            valign: 'top',
            sortable: true
        },
        {
            width: 1,
            field: 'plan_version',
            title: 'Plan Version',
            align: 'center',
            valign: 'middle',
            sortable: true
        }
        ]
    });
}

MODULE.createGradeTable = function(){
    $('#grade-table-javascript').bootstrapTable({
        pageSize: 7,
        striped : true,
        // pagination: true,
        clickToSelect: true,
        columns: [
        {
            field: 'courseNumber',
            title: 'code ',
            align: 'center',
            valign: 'middle',
            sortable: true,
        },
        {
            field: 'courseName',
            title: 'Name <span class="glyphicon glyphicon-chevron-down"></span>',
            align: 'center',
            valign: 'middle',
            sortable: true,
        },
        {
            width: 1,
            field: 'grade',
            title: 'Grade <span class="glyphicon glyphicon-chevron-down"></span>',
            align: 'center',
            valign: 'top',
            sortable: true,
        },
        {
            width: 1,
            field: 'aLevel',
            title: 'Level <span class="glyphicon glyphicon-chevron-down"></span>',
            align: 'center',
            valign: 'middle',
            sortable: true,
        }
        ]
    });
}