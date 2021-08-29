import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective implements OnInit {

  @Input() appUserRole: string[];
  @Input('appUserRoleSecondaryRoles') secondaryRoles: string[] = [];
  @Input('appUserRoleCurrentRole') currentRole: string = '';

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }

  ngOnInit(): void {
    const combinedRoles = [...this.appUserRole, ...this.secondaryRoles];
    if (combinedRoles.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }

}
