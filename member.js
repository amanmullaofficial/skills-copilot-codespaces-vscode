function skillsMember(){
return {
 Restrict: 'E',
    TemplateUrl: 'modules/skills/views/member.html',
    controller: 'SkillsController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
        member: '='
    }
};
}
