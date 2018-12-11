import * as React from 'react';
import styled from 'styled-components';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
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

export const JTitle = styled(EuiTitle)`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  text-align: ${props => props.textalign || 'left'};
`;
