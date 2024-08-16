"use client";
import React, { useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ResizableModal from "./ResizableModal";

const ResponsiveGridLayout = WidthProvider(GridLayout);

const Desktop: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
    console.log("openModal");
  };

  const layout = [
    { i: "resume", x: 8, y: 0, w: 2, h: 2 },
    { i: "education", x: 8, y: 2, w: 2, h: 2 },
    { i: "work", x: 8, y: 4, w: 2, h: 2 },
    { i: "brain", x: 8, y: 6, w: 2, h: 2 },
  ];

  return (
    <div className="min-h-screen bg-blue-900">
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={60}
        isDraggable={true}
        isResizable={true}
      >
        <div
          key="resume"
          className="bg-gray-200 p-4 rounded cursor-pointer"
          onClick={() => openModal(<p>This is my resume content.</p>)}
        >
          <img src="/folder-icon.png" alt="My Resume" className="mb-2 mx-auto" />
          <p className="text-center">My Resume</p>
        </div>
        <div
          key="education"
          className="bg-gray-200 p-4 rounded cursor-pointer"
          onClick={() => openModal(<p>This is my education content.</p>)}
        >
          <img src="/folder-icon.png" alt="My Education" className="mb-2 mx-auto" />
          <p className="text-center">My Education</p>
        </div>
        <div
          key="work"
          className="bg-gray-200 p-4 rounded cursor-pointer"
          onClick={() => openModal(<p>This is my work content.</p>)}
        >
          <img src="/folder-icon.png" alt="My Work" className="mb-2 mx-auto" />
          <p className="text-center">My Work</p>
        </div>
        <div
          key="brain"
          className="bg-gray-200 p-4 rounded cursor-pointer"
          onClick={() => openModal(<p>This is content inside my brain.</p>)}
        >
          <img src="/folder-icon.png" alt="Inside My Brain" className="mb-2 mx-auto" />
          <p className="text-center">Inside My Brain</p>
        </div>
      </ResponsiveGridLayout>

      <ResizableModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

export default Desktop;
