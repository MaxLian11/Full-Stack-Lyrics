package net.music.demo.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
public class OktaContoller {

    @GetMapping("/")
    public String displayUser(@AuthenticationPrincipal OidcUser user) {
        return "Welcome, " + user.getFullName();
    }
}


