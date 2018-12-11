import * as React from 'react';
import styled from 'styled-components';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageSideBar,
  EuiTitle 
} from '@elastic/eui';

export const JPage = styled(EuiPage)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

export const JPageBody = styled(EuiPageBody)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  padding: ${props => props.padding || '10px'};
`;

export const JPageContent = styled(EuiPageContent)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

export const JPageContentBody = styled(EuiPageContentBody)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

export const JPageContentHeader= styled(EuiPageContentHeader)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

export const JPageContentHeaderSection = styled(EuiPageContentHeaderSection)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`;

export const JPageSideBar = styled(EuiPageSideBar)`
  height: ${props => props.height || '100%'};
  min-width: ${props => props.width || '190px !important'};
  margin-right: 10px !important;
  visibility: ${props => props.visibility || 'visible'};
`;

export const JTitle = styled(EuiTitle)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  text-align: ${props => props.textalign || 'left'};
`;
