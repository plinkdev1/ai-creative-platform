"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Upload,
  FolderPlus,
  Search,
  Grid3x3,
  List,
  MoreVertical,
  Download,
  Share2,
  Trash2,
  File,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  Folder,
  Star,
  Clock,
  Filter,
  SortAsc,
} from "lucide-react"

type FileType = "folder" | "image" | "video" | "document" | "code" | "audio" | "other"
type ViewMode = "grid" | "list"

interface FileItem {
  id: string
  name: string
  type: FileType
  size?: string
  modified: string
  starred?: boolean
  shared?: boolean
}

const mockFiles: FileItem[] = [
  { id: "1", name: "Design Assets", type: "folder", modified: "2 days ago" },
  { id: "2", name: "Project Documents", type: "folder", modified: "1 week ago", starred: true },
  { id: "3", name: "hero-banner.png", type: "image", size: "2.4 MB", modified: "3 hours ago", starred: true },
  { id: "4", name: "presentation.pdf", type: "document", size: "5.1 MB", modified: "Yesterday" },
  { id: "5", name: "demo-video.mp4", type: "video", size: "45.2 MB", modified: "5 days ago", shared: true },
  { id: "6", name: "app.tsx", type: "code", size: "12 KB", modified: "1 hour ago" },
  { id: "7", name: "background-music.mp3", type: "audio", size: "3.8 MB", modified: "2 weeks ago" },
  { id: "8", name: "logo-final.svg", type: "image", size: "156 KB", modified: "4 days ago" },
  { id: "9", name: "README.md", type: "document", size: "8 KB", modified: "6 hours ago" },
  { id: "10", name: "styles.css", type: "code", size: "24 KB", modified: "2 hours ago" },
]

const getFileIcon = (type: FileType) => {
  switch (type) {
    case "folder":
      return Folder
    case "image":
      return FileImage
    case "video":
      return FileVideo
    case "audio":
      return FileAudio
    case "code":
      return FileCode
    case "document":
      return FileText
    default:
      return File
  }
}

const getFileColor = (type: FileType) => {
  switch (type) {
    case "folder":
      return "text-blue-600"
    case "image":
      return "text-green-600"
    case "video":
      return "text-purple-600"
    case "audio":
      return "text-pink-600"
    case "code":
      return "text-orange-600"
    case "document":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

export default function FilesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [files, setFiles] = useState(mockFiles)
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)

  const filteredFiles = files.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const toggleStar = (id: string) => {
    setFiles(files.map((file) => (file.id === id ? { ...file, starred: !file.starred } : file)))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Files</h1>
          <p className="text-muted-foreground mt-1">Manage and organize your files</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Files</DialogTitle>
                <DialogDescription>Drag and drop files here or click to browse</DialogDescription>
              </DialogHeader>
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">Drag and drop files here</p>
                <p className="text-xs text-muted-foreground mb-4">or</p>
                <Button variant="outline">Browse Files</Button>
              </div>
              <div className="text-xs text-muted-foreground">
                Maximum file size: 100MB. Supported formats: Images, Videos, Documents, Code files
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Folder
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Files</DropdownMenuItem>
                <DropdownMenuItem>Images</DropdownMenuItem>
                <DropdownMenuItem>Videos</DropdownMenuItem>
                <DropdownMenuItem>Documents</DropdownMenuItem>
                <DropdownMenuItem>Code</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Starred</DropdownMenuItem>
                <DropdownMenuItem>Shared</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SortAsc className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Name</DropdownMenuItem>
                <DropdownMenuItem>Date Modified</DropdownMenuItem>
                <DropdownMenuItem>Size</DropdownMenuItem>
                <DropdownMenuItem>Type</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Toggle */}
            <div className="flex items-center gap-1 border border-border rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setViewMode("grid")}
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Storage Usage */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Folder className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium">Storage Used</p>
                <p className="text-sm text-muted-foreground">1.2 GB of 2 GB used</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Upgrade Storage
            </Button>
          </div>
          <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: "60%" }} />
          </div>
        </CardContent>
      </Card>

      {/* Files Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFiles.map((file) => {
            const Icon = getFileIcon(file.type)
            const colorClass = getFileColor(file.type)

            return (
              <Card key={file.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`h-12 w-12 rounded-lg bg-muted flex items-center justify-center ${colorClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => toggleStar(file.id)}
                      >
                        <Star className={`h-4 w-4 ${file.starred ? "fill-yellow-500 text-yellow-500" : ""}`} />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium truncate mb-1">{file.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{file.modified}</span>
                      {file.size && <span>• {file.size}</span>}
                    </div>
                    {(file.starred || file.shared) && (
                      <div className="flex items-center gap-1 mt-2">
                        {file.starred && (
                          <Badge variant="secondary" className="text-xs">
                            Starred
                          </Badge>
                        )}
                        {file.shared && (
                          <Badge variant="secondary" className="text-xs">
                            Shared
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {filteredFiles.map((file) => {
                const Icon = getFileIcon(file.type)
                const colorClass = getFileColor(file.type)

                return (
                  <div key={file.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors group">
                    <div
                      className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0 ${colorClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{file.modified}</p>
                    </div>
                    {file.size && <div className="text-sm text-muted-foreground">{file.size}</div>}
                    <div className="flex items-center gap-1">
                      {file.starred && <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />}
                      {file.shared && <Share2 className="h-4 w-4 text-muted-foreground" />}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => toggleStar(file.id)}
                      >
                        <Star className={`h-4 w-4 ${file.starred ? "fill-yellow-500 text-yellow-500" : ""}`} />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {filteredFiles.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <File className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold mb-2">No files found</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {searchQuery ? "Try adjusting your search" : "Upload your first file to get started"}
            </p>
            {!searchQuery && (
              <Button onClick={() => setUploadDialogOpen(true)}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Files
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
