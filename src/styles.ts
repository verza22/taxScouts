// src/components/BookList.styles.ts
import styled, { keyframes } from 'styled-components';

export const Sheader = styled.header`
  background-color: #e5e7eb;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Sinput = styled.input`
  margin-left: auto;
  padding: 0.5rem 0.75rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: box-shadow 0.2s, background-color 0.2s;
`;

export const TooltipContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 500px;
  height: 600px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 16px;
  z-index: 999;
`;

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BookItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CoverImage = styled.img`
  width: 80px;
  height: 100px;
  margin-right: 16px;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
`;

export const Author = styled.p`
  margin: 4px 0;
  font-size: 14px;
`;

export const Year = styled.p`
  margin: 0;
  font-size: 14px;
`;

// Skeleton styles
const shimmer = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

export const SkeletonItem = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export const SkeletonImage = styled.div`
  width: 80px;
  height: 100px;
  margin-right: 16px;
  background: #eee;
  animation: ${shimmer} 1.5s infinite linear;
  background-image: linear-gradient(to right, #eee 0%, #ddd 50%, #eee 100%);
  background-size: 1000px 100%;
`;

export const SkeletonText = styled.div`
  flex: 1;
`;

export const SkeletonLine = styled.div<{ width: string }>`
  height: 12px;
  background: #eee;
  margin-bottom: 8px;
  width: ${({ width }) => width};
  animation: ${shimmer} 1.5s infinite linear;
  background-image: linear-gradient(to right, #eee 0%, #ddd 50%, #eee 100%);
  background-size: 1000px 100%;
`;