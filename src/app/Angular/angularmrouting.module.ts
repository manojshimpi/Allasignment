import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component'
import { ChildtoparenthComponent } from './assignonlycomponent/childtoparenth/childtoparenth.component'
import { DatabingvariantComponent } from './assignonlycomponent/databingvariant/databingvariant.component'
import { EventbindingmoretypesComponent } from './assignonlycomponent/eventbindingmoretypes/eventbindingmoretypes.component'
import { TemplatesmoretypesComponent } from './assignonlycomponent/templatesmoretypes/templatesmoretypes.component'
import { DirectivemoretypesComponent } from './assignonlycomponent/directivemoretypes/directivemoretypes.component'
import { PipesmoreComponent } from './assignonlycomponent/pipesmore/pipesmore.component'
import { RoutingprocesonlycodeComponent } from './assignonlycomponent/routingprocesonlycode/routingprocesonlycode.component'
import { ServicesmortypesComponent } from './assignonlycomponent/servicesmortypes/servicesmortypes.component'
import { HttpclientComponent } from './assignonlycomponent/httpclient/httpclient.component'
import { ClipromtsComponent } from './assignonlycomponent/clipromts/clipromts.component'
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
import { AngularelementsComponent } from './assignonlycomponent/angularelements/angularelements.component'

import { DependencyinjectioninAngularComponent } from './assignonlycomponent/dependencyinjectionin-angular/dependencyinjectionin-angular.component';
import { HierarchicalinjectorsComponent } from './assignonlycomponent/hierarchicalinjectors/hierarchicalinjectors.component';
import { DependencyprovidersComponent } from './assignonlycomponent/dependencyproviders/dependencyproviders.component';
import { DependencyinjectioninactionComponent } from './assignonlycomponent/dependencyinjectioninaction/dependencyinjectioninaction.component';
import { NavigatethecomponenttreewithdiComponent } from './assignonlycomponent/navigatethecomponenttreewithdi/navigatethecomponenttreewithdi.component'



const routes: Routes = [
  {
    path: 'angular',
    component: DashComponent,
    children: [
      {
      path: '',
      children: [
        { path: 'childtoparent', component:ChildtoparenthComponent},
        { path:'Binding' , component:DatabingvariantComponent},
        { path:'Eventbinding',component:EventbindingmoretypesComponent},
        { path:'Template' , component:TemplatesmoretypesComponent},
        { path:'Directive' , component:DirectivemoretypesComponent},
        { path:'pipe' , component:PipesmoreComponent},
        { path:'Routing' , component:RoutingprocesonlycodeComponent},
        { path:'Services' , component:ServicesmortypesComponent},
        { path:'HttpClient' , component:HttpclientComponent},
        { path:'Clipromts' , component:ClipromtsComponent},
        { path:'AllForms' , component:AllformsComponent},
        { path:'MaterialcdkVirtualscrolling' , component:MaterialscdkvirtualscrollingComponent},
        { path:'materialdraganddrop' , component:MaterialscdkdragdropComponent},
        { path:'animation' , component:AnimationComponent},
        { path:'testingbuildingproject' , component:TestingbuildingangularprojectComponent},
        { path:'alloperators' , component:AlloperatorsComponent},
        { path:'lifecyclehooks' , component:LifecyclehooksComponent},
        { path:'Ngmodulestypes' , component:NgmoduletypesComponent},
        { path:'observable' , component:ObservablerxjsComponent},
        { path:'componentstyle' , component:ComponentsstyleComponent},
        { path:'angularelements' , component:AngularelementsComponent},

        { path:'DependencyinjectioninAngular' , component:DependencyinjectioninAngularComponent},
        { path:'Hierarchicalinjectors' , component:HierarchicalinjectorsComponent},
        { path:'Dependencyproviders' , component:DependencyprovidersComponent},
        { path:'Dependencyinjectioninaction' , component:DependencyinjectioninactionComponent},
        { path:'Navigatethecomponenttreewithdi' , component:NavigatethecomponenttreewithdiComponent},
       
       
       ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AngularmroutingModule { }
