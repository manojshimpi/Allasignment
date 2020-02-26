import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularmroutingModule } from './angularmrouting.module';
import { DashComponent } from './dashboard/dash/dash.component';
import { ChildtoparenthComponent } from './assignonlycomponent/childtoparenth/childtoparenth.component';
import { HeadermenuComponent } from './headermenu/headermenu/headermenu.component';
import { DatabingvariantComponent } from './assignonlycomponent/databingvariant/databingvariant.component';
import { EventbindingmoretypesComponent } from './assignonlycomponent/eventbindingmoretypes/eventbindingmoretypes.component';
import { TemplatesmoretypesComponent } from './assignonlycomponent/templatesmoretypes/templatesmoretypes.component';
import { DirectivemoretypesComponent } from './assignonlycomponent/directivemoretypes/directivemoretypes.component';
import { PipesmoreComponent } from './assignonlycomponent/pipesmore/pipesmore.component';
import { RoutingprocesonlycodeComponent } from './assignonlycomponent/routingprocesonlycode/routingprocesonlycode.component';
import { ServicesmortypesComponent } from './assignonlycomponent/servicesmortypes/servicesmortypes.component';
import { HttpclientComponent } from './assignonlycomponent/httpclient/httpclient.component';
import { ClipromtsComponent } from './assignonlycomponent/clipromts/clipromts.component';
import { AllformsComponent } from './assignonlycomponent/allforms/allforms.component';
import { MaterialscdkvirtualscrollingComponent } from './assignonlycomponent/materialscdkvirtualscrolling/materialscdkvirtualscrolling.component';
import { MaterialscdkdragdropComponent } from './assignonlycomponent/materialscdkdragdrop/materialscdkdragdrop.component';
import { AnimationComponent } from './assignonlycomponent/animation/animation.component';
import { TestingbuildingangularprojectComponent } from './assignonlycomponent/testingbuildingangularproject/testingbuildingangularproject.component';
import { AlloperatorsComponent } from './assignonlycomponent/alloperators/alloperators.component';
import { LifecyclehooksComponent } from './assignonlycomponent/lifecyclehooks/lifecyclehooks.component';
import { NgmoduletypesComponent } from './assignonlycomponent/ngmoduletypes/ngmoduletypes.component';
import { ObservablerxjsComponent } from './assignonlycomponent/observablerxjs/observablerxjs.component';
import { ComponentsstyleComponent } from './assignonlycomponent/componentsstyle/componentsstyle.component';
import { AngularelementsComponent } from './assignonlycomponent/angularelements/angularelements.component';
import { DependencyinjectioninAngularComponent } from './assignonlycomponent/dependencyinjectionin-angular/dependencyinjectionin-angular.component';
import { HierarchicalinjectorsComponent } from './assignonlycomponent/hierarchicalinjectors/hierarchicalinjectors.component';
import { DependencyprovidersComponent } from './assignonlycomponent/dependencyproviders/dependencyproviders.component';
import { DependencyinjectioninactionComponent } from './assignonlycomponent/dependencyinjectioninaction/dependencyinjectioninaction.component';
import { NavigatethecomponenttreewithdiComponent } from './assignonlycomponent/navigatethecomponenttreewithdi/navigatethecomponenttreewithdi.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HighlightDirective } from './assignonlycomponent/directivemoretypes/highlight.directive';
import { ExponentialStrengthPipe } from './assignonlycomponent/pipesmore/exponential-strength.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { ObservablesComponent } from './assignonlycomponent/observables/observables.component';
import { Test12Component } from './test12/test12.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { SocialloginComponent } from './sociallogin/sociallogin.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,FileUploadModule,
    AngularmroutingModule, PdfViewerModule,NgbModule,NgbAlertModule,NgxSpinnerModule],
  declarations: [DashComponent, ChildtoparenthComponent,
    HeadermenuComponent, DatabingvariantComponent,
    EventbindingmoretypesComponent, TemplatesmoretypesComponent,
    DirectivemoretypesComponent, PipesmoreComponent, RoutingprocesonlycodeComponent,
    ServicesmortypesComponent, HttpclientComponent, ClipromtsComponent,
    AllformsComponent, MaterialscdkvirtualscrollingComponent,
    MaterialscdkdragdropComponent, AnimationComponent, TestingbuildingangularprojectComponent,
    AlloperatorsComponent, LifecyclehooksComponent, NgmoduletypesComponent, ObservablerxjsComponent,
    ComponentsstyleComponent, AngularelementsComponent,
    DependencyinjectioninAngularComponent, HierarchicalinjectorsComponent,
    DependencyprovidersComponent, DependencyinjectioninactionComponent,
    NavigatethecomponenttreewithdiComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    ObservablesComponent,
    Test12Component,
    SocialloginComponent]
})


export class AngularmsModule { }
