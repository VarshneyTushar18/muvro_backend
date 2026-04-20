import type { Schema, Struct } from '@strapi/strapi';

export interface CareersPageVacancy extends Struct.ComponentSchema {
  collectionName: 'components_careers_page_vacancies';
  info: {
    displayName: 'Vacancy';
  };
  attributes: {
    jobProfile: Schema.Attribute.Text & Schema.Attribute.Required;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    noOfPositions: Schema.Attribute.Integer & Schema.Attribute.Required;
    qualification: Schema.Attribute.String & Schema.Attribute.Required;
    requiredSkills: Schema.Attribute.Text & Schema.Attribute.Required;
    salary: Schema.Attribute.String & Schema.Attribute.Required;
    vacancyFor: Schema.Attribute.String & Schema.Attribute.Required;
    workExperience: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DownloadsPageDownloadItem extends Struct.ComponentSchema {
  collectionName: 'components_downloads_page_download_items';
  info: {
    displayName: 'Download Item';
  };
  attributes: {
    catalouge: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooterMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menu_items';
  info: {
    displayName: 'Footer Menu Items';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    menuListItem: Schema.Attribute.Component<'footer.menu-list-item', true>;
  };
}

export interface FooterGlobalLocations extends Struct.ComponentSchema {
  collectionName: 'components_footer_global_locations';
  info: {
    displayName: 'Global Locations';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    email: Schema.Attribute.Email;
    flag: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    mapEmbedUrl: Schema.Attribute.Text & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String;
  };
}

export interface FooterMenuListItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_menu_list_items';
  info: {
    displayName: 'menuListItem';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface OurHistoryPageHistoryTimeline extends Struct.ComponentSchema {
  collectionName: 'components_our_history_page_history_timelines';
  info: {
    displayName: 'History Timeline';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3000;
          min: 1950;
        },
        number
      >;
  };
}

export interface OurValuesPageValueCard extends Struct.ComponentSchema {
  collectionName: 'components_our_values_page_value_cards';
  info: {
    displayName: 'Value Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageApplications extends Struct.ComponentSchema {
  collectionName: 'components_product_page_applications';
  info: {
    displayName: 'Applications';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageAvailableDesigns extends Struct.ComponentSchema {
  collectionName: 'components_product_page_available_designs';
  info: {
    displayName: 'Available Designs';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'product-page.available-designs-items',
      true
    >;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageAvailableDesignsItems
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_available_designs_items';
  info: {
    displayName: 'Available Designs Items';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_product_page_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    DesktopImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    MobileImage: Schema.Attribute.Media<'images'>;
    TabletImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ProductPageConfigureItemText extends Struct.ComponentSchema {
  collectionName: 'components_product_page_configure_item_texts';
  info: {
    displayName: 'Configure Item Text';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageConfigureItems extends Struct.ComponentSchema {
  collectionName: 'components_product_page_configure_items';
  info: {
    displayName: 'Configure Items';
  };
  attributes: {
    configureItemsTexts: Schema.Attribute.Component<
      'product-page.configure-item-text',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ProductPageConfigureOptions extends Struct.ComponentSchema {
  collectionName: 'components_product_page_configure_options';
  info: {
    displayName: 'Configure Options';
  };
  attributes: {
    configureItems: Schema.Attribute.Component<
      'product-page.configure-items',
      true
    >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
    slider: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface ProductPageFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_product_page_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageIndustryApplications
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_industry_applications';
  info: {
    displayName: 'Industry Applications';
  };
  attributes: {
    applications: Schema.Attribute.Component<'product-page.applications', true>;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_product_page_introductions';
  info: {
    displayName: 'Introduction';
  };
  attributes: {
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
    youtubeURL: Schema.Attribute.String;
  };
}

export interface ProductPageKeyComponents extends Struct.ComponentSchema {
  collectionName: 'components_product_page_key_components';
  info: {
    displayName: 'Key Components';
  };
  attributes: {
    components: Schema.Attribute.Component<
      'product-page.key-components-item',
      true
    >;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageKeyComponentsItem extends Struct.ComponentSchema {
  collectionName: 'components_product_page_key_components_items';
  info: {
    displayName: 'Key Components Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_product_page_key_features';
  info: {
    displayName: 'Key Features';
  };
  attributes: {
    features: Schema.Attribute.Component<'product-page.feature-card', true>;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageProductGallery extends Struct.ComponentSchema {
  collectionName: 'components_product_page_product_galleries';
  info: {
    displayName: 'Product Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_product_page_specifications';
  info: {
    displayName: 'specifications';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageSystemDetails extends Struct.ComponentSchema {
  collectionName: 'components_product_page_system_details';
  info: {
    displayName: 'System Details';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageSystemSpecifications
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_system_specifications';
  info: {
    displayName: 'System Specifications';
  };
  attributes: {
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
    specifications: Schema.Attribute.Component<
      'product-page.specifications',
      true
    >;
  };
}

export interface ProductPageSystemVersatility extends Struct.ComponentSchema {
  collectionName: 'components_product_page_system_versatilities';
  info: {
    displayName: 'System Versatility';
  };
  attributes: {
    items: Schema.Attribute.Component<
      'product-page.system-versatility-items',
      true
    >;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageSystemVersatilityItems
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_system_versatility_items';
  info: {
    displayName: 'System Versatility Items';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ProductPageTabContentList extends Struct.ComponentSchema {
  collectionName: 'components_product_page_tab_content_lists';
  info: {
    displayName: 'Tab Content List';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageTabLayout extends Struct.ComponentSchema {
  collectionName: 'components_product_page_tab_layouts';
  info: {
    displayName: 'Tab Layout';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'product-page.tabs', true>;
  };
}

export interface ProductPageTabs extends Struct.ComponentSchema {
  collectionName: 'components_product_page_tabs';
  info: {
    displayName: 'Tabs';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tabContentHeading: Schema.Attribute.String;
    tabContentList: Schema.Attribute.Component<
      'product-page.tab-content-list',
      true
    >;
    tabName: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageTechinicalSpecificationsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_techinical_specifications_cards';
  info: {
    displayName: 'Techinical Specifications Card';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    specifications: Schema.Attribute.Component<
      'product-page.technical-specifications-item',
      true
    >;
  };
}

export interface ProductPageTechnicalSpecifications
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_technical_specifications';
  info: {
    displayName: 'Technical Specifications';
  };
  attributes: {
    item: Schema.Attribute.Component<
      'product-page.techinical-specifications-card',
      true
    >;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageTechnicalSpecificationsItem
  extends Struct.ComponentSchema {
  collectionName: 'components_product_page_technical_specifications_items';
  info: {
    displayName: 'Technical Specifications Item';
  };
  attributes: {
    specification: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_product_page_why_choose_items';
  info: {
    displayName: 'Why Choose Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductPageWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_product_page_why_choose_uses';
  info: {
    displayName: 'Why Choose Us';
  };
  attributes: {
    items: Schema.Attribute.Component<'product-page.why-choose-item', true>;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_product_page_workflows';
  info: {
    displayName: 'Workflow';
  };
  attributes: {
    items: Schema.Attribute.Component<'product-page.workflow-items', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    sectionHeader: Schema.Attribute.Component<'shared.section-header', false>;
  };
}

export interface ProductPageWorkflowItems extends Struct.ComponentSchema {
  collectionName: 'components_product_page_workflow_items';
  info: {
    displayName: 'Workflow Items';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QualityPolicyPagePolicyPoints extends Struct.ComponentSchema {
  collectionName: 'components_quality_policy_page_policy_points';
  info: {
    displayName: 'Policy Points';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'+91 (0) 9289 071 715'>;
    queryText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Having Queries? Call Us Now'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headers';
  info: {
    displayName: 'Section Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SoftwarePageBanner extends Struct.ComponentSchema {
  collectionName: 'components_software_page_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'>;
    tabletImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SolutionPageSolution extends Struct.ComponentSchema {
  collectionName: 'components_solution_page_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    solutionBannerImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    solutionBannerName: Schema.Attribute.String;
    solutionItem: Schema.Attribute.Component<
      'solution-page.solution-item',
      true
    >;
    solutionName: Schema.Attribute.String & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'>;
  };
}

export interface SolutionPageSolutionItem extends Struct.ComponentSchema {
  collectionName: 'components_solution_page_solution_items';
  info: {
    displayName: 'solutionItem';
  };
  attributes: {
    hasMultipleProduct: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    itemDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    itemImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    itemTitle: Schema.Attribute.String & Schema.Attribute.Required;
    product_page: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
    product_pages: Schema.Attribute.Relation<
      'manyToMany',
      'api::product.product'
    >;
  };
}

export interface TeamMemberSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_team_member_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'link';
  };
  attributes: {
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
  };
}

export interface TechnologyPageTechnologyCard extends Struct.ComponentSchema {
  collectionName: 'components_technology_page_technology_cards';
  info: {
    displayName: 'Technology Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhyUsPageCardItem extends Struct.ComponentSchema {
  collectionName: 'components_why_us_page_card_items';
  info: {
    displayName: 'cardItem';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'careers-page.vacancy': CareersPageVacancy;
      'downloads-page.download-item': DownloadsPageDownloadItem;
      'footer.footer-menu-items': FooterFooterMenuItems;
      'footer.global-locations': FooterGlobalLocations;
      'footer.menu-list-item': FooterMenuListItem;
      'our-history-page.history-timeline': OurHistoryPageHistoryTimeline;
      'our-values-page.value-card': OurValuesPageValueCard;
      'product-page.applications': ProductPageApplications;
      'product-page.available-designs': ProductPageAvailableDesigns;
      'product-page.available-designs-items': ProductPageAvailableDesignsItems;
      'product-page.banner': ProductPageBanner;
      'product-page.configure-item-text': ProductPageConfigureItemText;
      'product-page.configure-items': ProductPageConfigureItems;
      'product-page.configure-options': ProductPageConfigureOptions;
      'product-page.feature-card': ProductPageFeatureCard;
      'product-page.industry-applications': ProductPageIndustryApplications;
      'product-page.introduction': ProductPageIntroduction;
      'product-page.key-components': ProductPageKeyComponents;
      'product-page.key-components-item': ProductPageKeyComponentsItem;
      'product-page.key-features': ProductPageKeyFeatures;
      'product-page.product-gallery': ProductPageProductGallery;
      'product-page.specifications': ProductPageSpecifications;
      'product-page.system-details': ProductPageSystemDetails;
      'product-page.system-specifications': ProductPageSystemSpecifications;
      'product-page.system-versatility': ProductPageSystemVersatility;
      'product-page.system-versatility-items': ProductPageSystemVersatilityItems;
      'product-page.tab-content-list': ProductPageTabContentList;
      'product-page.tab-layout': ProductPageTabLayout;
      'product-page.tabs': ProductPageTabs;
      'product-page.techinical-specifications-card': ProductPageTechinicalSpecificationsCard;
      'product-page.technical-specifications': ProductPageTechnicalSpecifications;
      'product-page.technical-specifications-item': ProductPageTechnicalSpecificationsItem;
      'product-page.why-choose-item': ProductPageWhyChooseItem;
      'product-page.why-choose-us': ProductPageWhyChooseUs;
      'product-page.workflow': ProductPageWorkflow;
      'product-page.workflow-items': ProductPageWorkflowItems;
      'quality-policy-page.policy-points': QualityPolicyPagePolicyPoints;
      'shared.cta': SharedCta;
      'shared.open-graph': SharedOpenGraph;
      'shared.section-header': SharedSectionHeader;
      'shared.seo': SharedSeo;
      'software-page.banner': SoftwarePageBanner;
      'solution-page.solution': SolutionPageSolution;
      'solution-page.solution-item': SolutionPageSolutionItem;
      'team-member.social-links': TeamMemberSocialLinks;
      'technology-page.technology-card': TechnologyPageTechnologyCard;
      'why-us-page.card-item': WhyUsPageCardItem;
    }
  }
}
