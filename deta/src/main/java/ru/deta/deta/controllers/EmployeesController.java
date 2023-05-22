package ru.deta.deta.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.RelationInfoDto;
import ru.deta.deta.dto.info.UserInfoDto;
import ru.deta.deta.service.ProjectService;
import ru.deta.deta.service.RelationService;
import ru.deta.deta.service.UserService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class EmployeesController {
    private final UserService userService;
    private final RelationService relationService;
    private final ProjectService projectService;

    @GetMapping("/projects/{projectId}/employees")
    public List<UserInfoDto> getEmployees(@PathVariable Long projectId) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, false);

        return projectService.getParticipants(projectId);
    }

    @PostMapping("/projects/{projectId}/employees")
    public RelationInfoDto addEmployee(@PathVariable Long projectId,
                                       @RequestBody RelationInfoDto relationInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, true);
        return relationService.createRelation(projectId, relationInfo);
    }

    @PostMapping("/projects/{projectId}/employees/relation")
    public List<RelationInfoDto> addRelation(@PathVariable Long projectId,
                                             @RequestBody List<RelationInfoDto> relationInfos) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, true);
        List<RelationInfoDto> res = new ArrayList<>();

        for (var relationInfo : relationInfos) {
            res.add(relationService.createRelation(projectId, relationInfo));
        }

        return res;
    }

    @PutMapping("/projects/{projectId}/employees/relation")
    public void updateRelation(@PathVariable Long projectId,
                               @RequestBody RelationInfoDto relationInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, true);
        relationService.updateRelation(relationInfo, projectId);
    }

    private void validate(UserDto user, Long projectId, boolean checkAuthor) {

    }
}
