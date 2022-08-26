import styled from 'styled-components';
import React, { useState } from "react";

const StyledOverviewOptionForm = styled.div`
  grid-area: OvForm;
`;
const StyledOverviewFavoriteStar = styled.button`
`;

export default function OverViewForm({ styles }) {
  return (
    <StyledOverviewOptionForm>
        <form>
          <label>
            <select>
              <option value="air">air</option>
              <option value="earth">earth</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
            </select>
          </label>
          <label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <input type="submit" value="Add to Bag"/>
          {/* there needs to be a favorite button */}
          <StyledOverviewFavoriteStar>&#9733;</StyledOverviewFavoriteStar>
        </form>
      </StyledOverviewOptionForm>
  );
}