var moveEnd = function(obj){
    obj.focus();
    obj = obj.get(0);
    var len = obj.value.length;
    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character',len);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len;
    }
};
function publishTopic() {
    var em = $("#error_message");
    var errors = 0;
    var title = $("#title").val();
    var content = $("#content").val();

    if(title.length == 0) {
        errors++;
        em.html("标题不能为空");
    }

    if(title.length > 120) {
        errors++;
        em.html("标题不能超过120个字符")
    }

    if(errors == 0) {
        var form = $("#topicForm");
        form.submit();
    }
}
function previewContent() {
    var content = $("#content").val();
    if(content.length > 0) {
        $("#preview").html("<hr>" + marked(content));
    }
}
function goTop() {
    $('body').animate({
        scrollTop: 0
    }, 300);
}
function replySubmit() {
    var errors = 0;
    var em = $("#error_message");
    var content = $("#content").val();
    if(content.length == 0) {
        errors++;
        em.html("回复内容不能为空");
    }
    if(errors == 0) {
        var form = $("#replyForm");
        form.submit();
    }
}
function qsend(e) {
    if ((e.ctrlKey || e.metaKey) && e.which === 13) {
        e.preventDefault();
        replySubmit();
    }
}
function replythis(author) {
    var content = $("#content");
    var oldContent = content.val();
    var prefix = "@" + author + " ";
    var newContent = '';
    if(oldContent.length > 0){
        if (oldContent != prefix) {
            newContent = oldContent + "\n" + prefix;
        }
    } else {
        newContent = prefix
    }
    content.focus();
    content.val(newContent);
    moveEnd($("#content"));
}
function updateUserProfile() {
    var errors = 0;
    var em = $("#error_message");
    var signature = $("#signature").val();
    if(signature.length > 1000) {
        errors++;
        em.html("个性签名不能超过1000个字");
    }
    if(errors == 0) {
        var form = $("#userProfileForm");
        $("#userProfileUpdateBtn").button("保存中...");
        form.submit();
    }
}
function permissionSubmit() {
    var errors = 0;
    var em = $("#error_message");
    var pid = $("#pid").val();
    var name = $("#name").val();
    var url = $("#url").val();
    var description = $("#description").val();
    if(name.length == 0) {
        errors++;
        em.html("权限标识不能为空");
    }
    if(pid > 0 && url.length == 0) {
        errors++;
        em.html("授权路径不能为空");
    }
    if(description.length == 0) {
        errors++;
        em.html("权限描述不能为空");
    }
    if(errors == 0) {
        var form = $("#permissionForm");
        $("#permissionBtn").button("保存中...");
        form.submit();
    }
}
function roleSubmit() {
    var errors = 0;
    var em = $("#error_message");
    var name = $("#name").val();
    var description = $("#description").val();
    if(name.length == 0) {
        errors++;
        em.html("角色标识不能为空");
    }
    if(description.length == 0) {
        errors++;
        em.html("角色描述不能为空");
    }
    if(errors == 0) {
        var form = $("#roleForm");
        $("#roleBtn").button("保存中...");
        form.submit();
    }
}